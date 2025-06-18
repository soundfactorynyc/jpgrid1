const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors());

// Serve static files (for HLS segments)
app.use('/hls', express.static(path.join(__dirname, 'hls')));

// Create HLS directory if it doesn't exist
const hlsDir = path.join(__dirname, 'hls');
if (!fs.existsSync(hlsDir)) {
    fs.mkdirSync(hlsDir, { recursive: true });
}

// RTMP to HLS conversion using FFmpeg
let ffmpegProcess = null;

// Start RTMP server (simplified - in production use node-media-server)
function startRTMPToHLS() {
    // This would typically use FFmpeg to convert RTMP to HLS
    // For demo purposes, we'll create a simple endpoint
    console.log('RTMP to HLS conversion ready');
    
    // In a real implementation, you'd use something like:
    // ffmpegProcess = spawn('ffmpeg', [
    //     '-i', 'rtmp://localhost:1935/live/stream',
    //     '-c:v', 'libx264',
    //     '-c:a', 'aac',
    //     '-f', 'hls',
    //     '-hls_time', '2',
    //     '-hls_list_size', '3',
    //     '-hls_flags', 'delete_segments',
    //     path.join(hlsDir, 'stream.m3u8')
    // ]);
}

// API Routes
app.get('/api/stream/status', (req, res) => {
    res.json({
        status: 'live',
        rtmpUrl: 'rtmp://stream.soundfactorynyc.com/live',
        hlsUrl: 'https://live.soundfactorynyc.com/hls/stream.m3u8',
        viewers: Math.floor(Math.random() * 100) + 10 // Mock viewer count
    });
});

app.post('/api/stream/start', (req, res) => {
    console.log('Starting stream...');
    startRTMPToHLS();
    res.json({ message: 'Stream started', status: 'live' });
});

app.post('/api/stream/stop', (req, res) => {
    console.log('Stopping stream...');
    if (ffmpegProcess) {
        ffmpegProcess.kill();
        ffmpegProcess = null;
    }
    res.json({ message: 'Stream stopped', status: 'offline' });
});

// WebSocket for real-time updates (reactions, chat, etc.)
const http = require('http');
const WebSocket = require('ws');

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Store connected clients
const clients = new Set();

wss.on('connection', (ws) => {
    clients.add(ws);
    console.log('Client connected. Total clients:', clients.size);
    
    // Send welcome message
    ws.send(JSON.stringify({
        type: 'welcome',
        message: 'Connected to Sound Factory streaming server'
    }));
    
    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message);
            console.log('Received:', data);
            
            // Broadcast to all clients
            const broadcastData = {
                type: data.type,
                ...data,
                timestamp: Date.now()
            };
            
            clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(broadcastData));
                }
            });
        } catch (error) {
            console.error('Error parsing message:', error);
        }
    });
    
    ws.on('close', () => {
        clients.delete(ws);
        console.log('Client disconnected. Total clients:', clients.size);
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        clients: clients.size
    });
});

// Start server
server.listen(PORT, () => {
    console.log(`🎥 Sound Factory Streaming Server running on port ${PORT}`);
    console.log(`📡 RTMP Input: rtmp://stream.soundfactorynyc.com/live`);
    console.log(`📺 HLS Output: https://live.soundfactorynyc.com/hls/stream.m3u8`);
    console.log(`🔗 WebSocket: ws://localhost:${PORT}`);
    console.log(`💚 Health Check: http://localhost:${PORT}/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('Shutting down streaming server...');
    if (ffmpegProcess) {
        ffmpegProcess.kill();
    }
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});
