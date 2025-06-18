// components/soundFactoryComponents.js
// This file organizes all 192 components into a structured registry

export const componentRegistry = {
  // Layer 1: Live Stream Mix & Match Components (64 Components)
  top: {
    // AI-Powered DJ Control Suite (1-16)
    1: { name: "Mind-Reading Track Selector", icon: "🎛️", category: "DJ Control" },
    2: { name: "Crowd-Powered Beat Surgeon", icon: "🎚️", category: "DJ Control" },
    3: { name: "Harmonic Key Detective", icon: "🔍", category: "DJ Control" },
    4: { name: "Tempo Sync Master", icon: "⏱️", category: "DJ Control" },
    5: { name: "Loop Station Commander", icon: "🔄", category: "DJ Control" },
    6: { name: "Filter Frequency Wizard", icon: "🌊", category: "DJ Control" },
    7: { name: "Echo Chamber Architect", icon: "🏛️", category: "DJ Control" },
    8: { name: "Reverb Space Designer", icon: "🌌", category: "DJ Control" },
    9: { name: "Crossfader Curve Sculptor", icon: "⚡", category: "DJ Control" },
    10: { name: "EQ Frequency Surgeon", icon: "📊", category: "DJ Control" },
    11: { name: "Gain Structure Guardian", icon: "📈", category: "DJ Control" },
    12: { name: "Cue Point Navigator", icon: "📍", category: "DJ Control" },
    13: { name: "Pitch Bend Virtuoso", icon: "🎵", category: "DJ Control" },
    14: { name: "Scratch Performance Pad", icon: "💿", category: "DJ Control" },
    15: { name: "Sample Trigger Matrix", icon: "🎯", category: "DJ Control" },
    16: { name: "Recording Session Manager", icon: "🎙️", category: "DJ Control" },

    // Visual Control Suite (17-32)
    17: { name: "LED Strip Conductor", icon: "💡", category: "Visual Control" },
    18: { name: "Laser Show Choreographer", icon: "✨", category: "Visual Control" },
    19: { name: "Smoke Machine Operator", icon: "💨", category: "Visual Control" },
    20: { name: "Strobe Light Commander", icon: "⚡", category: "Visual Control" },
    21: { name: "Video Wall Director", icon: "📺", category: "Visual Control" },
    22: { name: "Projection Mapping Artist", icon: "🎨", category: "Visual Control" },
    23: { name: "Color Temperature Mixer", icon: "🌈", category: "Visual Control" },
    24: { name: "Moving Head Programmer", icon: "🔄", category: "Visual Control" },
    25: { name: "Pixel Mapping Designer", icon: "🔲", category: "Visual Control" },
    26: { name: "UV Light Controller", icon: "🟣", category: "Visual Control" },
    27: { name: "Mirror Ball Operator", icon: "🪩", category: "Visual Control" },
    28: { name: "Fog Machine Technician", icon: "🌫️", category: "Visual Control" },
    29: { name: "Bubble Machine Master", icon: "🫧", category: "Visual Control" },
    30: { name: "Confetti Cannon Captain", icon: "🎊", category: "Visual Control" },
    31: { name: "Flame Effect Coordinator", icon: "🔥", category: "Visual Control" },
    32: { name: "Hologram Projector", icon: "👻", category: "Visual Control" },

    // Dance Battle Suite (33-48)
    33: { name: "Battle Round Timer", icon: "⏰", category: "Dance Battle" },
    34: { name: "Judge Score Tracker", icon: "🏆", category: "Dance Battle" },
    35: { name: "Crowd Meter Reader", icon: "📊", category: "Dance Battle" },
    36: { name: "Battle Music Selector", icon: "🎵", category: "Dance Battle" },
    37: { name: "Dancer Spotlight", icon: "💡", category: "Dance Battle" },
    38: { name: "Move Recognition AI", icon: "🤖", category: "Dance Battle" },
    39: { name: "Battle Format Manager", icon: "📋", category: "Dance Battle" },
    40: { name: "Hype Sound Board", icon: "🔊", category: "Dance Battle" },
    41: { name: "Dance Floor Zones", icon: "🟦", category: "Dance Battle" },
    42: { name: "Style Category Selector", icon: "💃", category: "Dance Battle" },
    43: { name: "Battle Cam Director", icon: "📹", category: "Dance Battle" },
    44: { name: "Energy Boost Activator", icon: "⚡", category: "Dance Battle" },
    45: { name: "Signature Move Detector", icon: "✨", category: "Dance Battle" },
    46: { name: "Battle History Keeper", icon: "📚", category: "Dance Battle" },
    47: { name: "Crowd Participation", icon: "👥", category: "Dance Battle" },
    48: { name: "Victory Celebration", icon: "🎉", category: "Dance Battle" },

    // Community Analytics Suite (49-64)
    49: { name: "Viewer Count Display", icon: "👁️", category: "Community" },
    50: { name: "Chat Activity Monitor", icon: "💬", category: "Community" },
    51: { name: "Donation Tracker", icon: "💰", category: "Community" },
    52: { name: "Follower Growth Chart", icon: "📈", category: "Community" },
    53: { name: "Engagement Heatmap", icon: "🔥", category: "Community" },
    54: { name: "Moderator Dashboard", icon: "🛡️", category: "Community" },
    55: { name: "Stream Quality Monitor", icon: "📊", category: "Community" },
    56: { name: "Social Media Sync", icon: "🔗", category: "Community" },
    57: { name: "Community Polls", icon: "🗳️", category: "Community" },
    58: { name: "Highlight Clipper", icon: "✂️", category: "Community" },
    59: { name: "Subscriber Perks", icon: "⭐", category: "Community" },
    60: { name: "Event Scheduler", icon: "📅", category: "Community" },
    61: { name: "Collaboration Hub", icon: "🤝", category: "Community" },
    62: { name: "Merchandise Display", icon: "👕", category: "Community" },
    63: { name: "Fan Art Gallery", icon: "🎨", category: "Community" },
    64: { name: "Community Challenges", icon: "🏅", category: "Community" }
  },
  
  // Layer 2: TikTok-Style Reaction Power-Ups (64 Components)
  middle: {
    // Music Manipulation Reactions (65-80)
    65: { name: "Bass Bomb Deployer", icon: "💣", category: "Music Reaction" },
    66: { name: "Treble Sparkle Shower", icon: "✨", category: "Music Reaction" },
    67: { name: "Vocal Pitch Shifter", icon: "🎤", category: "Music Reaction" },
    68: { name: "Beat Drop Anticipator", icon: "⬇️", category: "Music Reaction" },
    69: { name: "Rhythm Multiplier", icon: "✖️", category: "Music Reaction" },
    70: { name: "Melody Harmonizer", icon: "🎼", category: "Music Reaction" },
    71: { name: "Tempo Warper", icon: "🌀", category: "Music Reaction" },
    72: { name: "Frequency Isolator", icon: "🔍", category: "Music Reaction" },
    73: { name: "Stereo Field Manipulator", icon: "🔄", category: "Music Reaction" },
    74: { name: "Dynamic Range Compressor", icon: "📊", category: "Music Reaction" },
    75: { name: "Distortion Drive", icon: "🔥", category: "Music Reaction" },
    76: { name: "Chorus Ensemble", icon: "👥", category: "Music Reaction" },
    77: { name: "Phaser Sweep", icon: "🌊", category: "Music Reaction" },
    78: { name: "Flanger Jet", icon: "✈️", category: "Music Reaction" },
    79: { name: "Granular Texture", icon: "🌾", category: "Music Reaction" },
    80: { name: "Spectral Freeze", icon: "❄️", category: "Music Reaction" },

    // Visual Reaction Effects (81-96)
    81: { name: "Screen Shake Earthquake", icon: "📱", category: "Visual Reaction" },
    82: { name: "Color Flash Strobe", icon: "🌈", category: "Visual Reaction" },
    83: { name: "Particle Explosion", icon: "💥", category: "Visual Reaction" },
    84: { name: "Zoom Punch Effect", icon: "👊", category: "Visual Reaction" },
    85: { name: "Glitch Matrix Rain", icon: "🔢", category: "Visual Reaction" },
    86: { name: "Neon Glow Pulse", icon: "💫", category: "Visual Reaction" },
    87: { name: "Mirror Kaleidoscope", icon: "🔮", category: "Visual Reaction" },
    88: { name: "Fire Trail Blazer", icon: "🔥", category: "Visual Reaction" },
    89: { name: "Lightning Strike", icon: "⚡", category: "Visual Reaction" },
    90: { name: "Smoke Cloud Burst", icon: "☁️", category: "Visual Reaction" },
    91: { name: "Holographic Overlay", icon: "👻", category: "Visual Reaction" },
    92: { name: "Pixelation Dissolve", icon: "🔲", category: "Visual Reaction" },
    93: { name: "Chromatic Aberration", icon: "🌈", category: "Visual Reaction" },
    94: { name: "Vortex Spiral", icon: "🌀", category: "Visual Reaction" },
    95: { name: "Lens Flare Burst", icon: "☀️", category: "Visual Reaction" },
    96: { name: "Digital Noise Storm", icon: "📺", category: "Visual Reaction" },

    // Game Reaction Power-Ups (97-112)
    97: { name: "Power-Up Collector", icon: "⭐", category: "Game Reaction" },
    98: { name: "Combo Multiplier", icon: "🔢", category: "Game Reaction" },
    99: { name: "Speed Boost Activator", icon: "💨", category: "Game Reaction" },
    100: { name: "Shield Generator", icon: "🛡️", category: "Game Reaction" },
    101: { name: "Double Jump Enabler", icon: "⬆️", category: "Game Reaction" },
    102: { name: "Invisibility Cloak", icon: "👻", category: "Game Reaction" },
    103: { name: "Time Slow Motion", icon: "⏰", category: "Game Reaction" },
    104: { name: "Magnet Coin Collector", icon: "🧲", category: "Game Reaction" },
    105: { name: "Health Regenerator", icon: "❤️", category: "Game Reaction" },
    106: { name: "Weapon Upgrade", icon: "⚔️", category: "Game Reaction" },
    107: { name: "Score Doubler", icon: "💯", category: "Game Reaction" },
    108: { name: "Extra Life Giver", icon: "🎮", category: "Game Reaction" },
    109: { name: "Boss Battle Mode", icon: "👹", category: "Game Reaction" },
    110: { name: "Achievement Unlocker", icon: "🏆", category: "Game Reaction" },
    111: { name: "Leaderboard Climber", icon: "📊", category: "Game Reaction" },
    112: { name: "Victory Dance Trigger", icon: "💃", category: "Game Reaction" },

    // Social Reaction Tools (113-128)
    113: { name: "Applause Amplifier", icon: "👏", category: "Social Reaction" },
    114: { name: "Laugh Track Player", icon: "😂", category: "Social Reaction" },
    115: { name: "Gasp Sound Effect", icon: "😱", category: "Social Reaction" },
    116: { name: "Cheer Wave Starter", icon: "🙌", category: "Social Reaction" },
    117: { name: "Boo Sound Dropper", icon: "👎", category: "Social Reaction" },
    118: { name: "Whistle Blow Alert", icon: "🔔", category: "Social Reaction" },
    119: { name: "Crowd Roar Builder", icon: "🦁", category: "Social Reaction" },
    120: { name: "Standing Ovation", icon: "🧍", category: "Social Reaction" },
    121: { name: "Slow Clap Starter", icon: "👏", category: "Social Reaction" },
    122: { name: "Hype Train Conductor", icon: "🚂", category: "Social Reaction" },
    123: { name: "Energy Meter Booster", icon: "⚡", category: "Social Reaction" },
    124: { name: "Mood Ring Changer", icon: "💍", category: "Social Reaction" },
    125: { name: "Vibe Check Scanner", icon: "📡", category: "Social Reaction" },
    126: { name: "Atmosphere Creator", icon: "🌟", category: "Social Reaction" },
    127: { name: "Community Spirit", icon: "🤝", category: "Social Reaction" },
    128: { name: "Collective Memory", icon: "🧠", category: "Social Reaction" }
  },
  
  // Layer 3: Advanced Group Chat Hub (64 Components)
  bottom: {
    // AI Chat Enhancement Suite (129-144)
    129: { name: "Bubble Letter Generator", icon: "🗨️", category: "Chat Enhancement" },
    130: { name: "Emoji Rain Maker", icon: "🌧️", category: "Chat Enhancement" },
    131: { name: "Text Animation Studio", icon: "✨", category: "Chat Enhancement" },
    132: { name: "Voice Message Converter", icon: "🎤", category: "Chat Enhancement" },
    133: { name: "Language Translator", icon: "🌍", category: "Chat Enhancement" },
    134: { name: "Sentiment Analyzer", icon: "😊", category: "Chat Enhancement" },
    135: { name: "Auto Moderator AI", icon: "🤖", category: "Chat Enhancement" },
    136: { name: "Spam Filter Shield", icon: "🛡️", category: "Chat Enhancement" },
    137: { name: "Chat History Keeper", icon: "📚", category: "Chat Enhancement" },
    138: { name: "Message Highlighter", icon: "🖍️", category: "Chat Enhancement" },
    139: { name: "Thread Organizer", icon: "🧵", category: "Chat Enhancement" },
    140: { name: "Quick Reply Generator", icon: "⚡", category: "Chat Enhancement" },
    141: { name: "Typing Indicator", icon: "⌨️", category: "Chat Enhancement" },
    142: { name: "Read Receipt Tracker", icon: "✅", category: "Chat Enhancement" },
    143: { name: "Message Scheduler", icon: "⏰", category: "Chat Enhancement" },
    144: { name: "Chat Backup System", icon: "💾", category: "Chat Enhancement" },

    // Visual Communication Tools (145-160)
    145: { name: "GIF Search Engine", icon: "🔍", category: "Visual Communication" },
    146: { name: "Meme Generator Pro", icon: "😂", category: "Visual Communication" },
    147: { name: "Sticker Pack Creator", icon: "🎨", category: "Visual Communication" },
    148: { name: "Avatar Customizer", icon: "👤", category: "Visual Communication" },
    149: { name: "Background Changer", icon: "🖼️", category: "Visual Communication" },
    150: { name: "Filter Effect Studio", icon: "📸", category: "Visual Communication" },
    151: { name: "Doodle Board Shared", icon: "✏️", category: "Visual Communication" },
    152: { name: "Screen Share Portal", icon: "📺", category: "Visual Communication" },
    153: { name: "Video Message Recorder", icon: "📹", category: "Visual Communication" },
    154: { name: "Photo Collage Maker", icon: "🖼️", category: "Visual Communication" },
    155: { name: "Reaction Cam Overlay", icon: "📷", category: "Visual Communication" },
    156: { name: "Virtual Hand Gestures", icon: "👋", category: "Visual Communication" },
    157: { name: "Mood Lighting Control", icon: "💡", category: "Visual Communication" },
    158: { name: "3D Avatar Creator", icon: "🎭", category: "Visual Communication" },
    159: { name: "Hologram Chat Mode", icon: "👻", category: "Visual Communication" },
    160: { name: "AR Object Placer", icon: "📦", category: "Visual Communication" },

    // Community Connection Features (161-176)
    161: { name: "Friend Finder Radar", icon: "📡", category: "Community Connection" },
    162: { name: "Group Creator Tool", icon: "👥", category: "Community Connection" },
    163: { name: "Event Organizer", icon: "📅", category: "Community Connection" },
    164: { name: "Interest Matcher", icon: "💝", category: "Community Connection" },
    165: { name: "Skill Share Network", icon: "🎓", category: "Community Connection" },
    166: { name: "Collaboration Space", icon: "🤝", category: "Community Connection" },
    167: { name: "Mentorship Connector", icon: "👨‍🏫", category: "Community Connection" },
    168: { name: "Project Team Builder", icon: "🏗️", category: "Community Connection" },
    169: { name: "Study Group Former", icon: "📖", category: "Community Connection" },
    170: { name: "Gaming Squad Finder", icon: "🎮", category: "Community Connection" },
    171: { name: "Music Jam Session", icon: "🎵", category: "Community Connection" },
    172: { name: "Art Collaboration", icon: "🎨", category: "Community Connection" },
    173: { name: "Code Review Circle", icon: "💻", category: "Community Connection" },
    174: { name: "Book Club Creator", icon: "📚", category: "Community Connection" },
    175: { name: "Fitness Buddy Finder", icon: "💪", category: "Community Connection" },
    176: { name: "Travel Group Planner", icon: "✈️", category: "Community Connection" },

    // Legacy System Integration (177-192)
    177: { name: "Discord Bridge", icon: "🎮", category: "Legacy System" },
    178: { name: "Slack Connector", icon: "💼", category: "Legacy System" },
    179: { name: "Teams Integration", icon: "👔", category: "Legacy System" },
    180: { name: "WhatsApp Gateway", icon: "📱", category: "Legacy System" },
    181: { name: "Telegram Portal", icon: "✈️", category: "Legacy System" },
    182: { name: "IRC Bridge Classic", icon: "💻", category: "Legacy System" },
    183: { name: "Email Notification", icon: "📧", category: "Legacy System" },
    184: { name: "SMS Alert System", icon: "📲", category: "Legacy System" },
    185: { name: "RSS Feed Reader", icon: "📰", category: "Legacy System" },
    186: { name: "API Webhook Manager", icon: "🔗", category: "Legacy System" },
    187: { name: "Database Logger", icon: "🗄️", category: "Legacy System" },
    188: { name: "File Share System", icon: "📁", category: "Legacy System" },
    189: { name: "Backup Sync Tool", icon: "☁️", category: "Legacy System" },
    190: { name: "Analytics Tracker", icon: "📊", category: "Legacy System" },
    191: { name: "Security Monitor", icon: "🔒", category: "Legacy System" },
    192: { name: "System Health Check", icon: "❤️", category: "Legacy System" }
  }
};

// Helper function to get component by ID
export function getComponent(gridPosition, buttonIndex) {
  const grid = componentRegistry[gridPosition];
  return grid ? grid[buttonIndex] : null;
}

// Helper function to get all components for a grid
export function getGridComponents(gridPosition) {
  return componentRegistry[gridPosition] || {};
}

// Categories for filtering
export const categories = {
  top: {
    "DJ Control": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    "Visual Control": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
    "Dance Battle": [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
    "Community": [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64]
  },
  middle: {
    "Music Reaction": [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    "Visual Reaction": [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96],
    "Game Reaction": [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112],
    "Social Reaction": [113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128]
  },
  bottom: {
    "Chat Enhancement": [129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144],
    "Visual Communication": [145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160],
    "Community Connection": [161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176],
    "Legacy System": [177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192]
  }
};
