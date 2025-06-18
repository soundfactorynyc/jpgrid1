# Technology Stack - JPGrid1 LED Control System

## Frontend Framework
- **Astro 5.9.4**: Static site generator with component-based architecture
  - Chosen for fast loading, minimal JavaScript bundle
  - Excellent for interactive components with islands architecture
  - Built-in TypeScript support

## Core Technologies

### HTML/CSS/JavaScript
- **Modern CSS**: Grid, Flexbox, CSS Variables, Animations
- **Responsive Design**: Mobile-first approach with clamp() functions
- **CSS Grid**: For LED pixel layout (200x100 grid)
- **CSS Animations**: Smooth transitions and visual feedback

### JavaScript Architecture
- **ES6+ Classes**: HarmonySystem controller class
- **WebSocket API**: Real-time communication for LED control
- **DOM Manipulation**: Direct pixel control for performance
- **Event Handling**: Touch and keyboard interactions

## Component Architecture

### UnifiedHarmonySystem Component
- **Grid Interface**: 3-tier button system (top/middle/bottom)
- **LED Display**: 20,000 pixel management system
- **WebSocket Integration**: Real-time control communication
- **Effect System**: Built-in visual effects (rainbow, wave, pulse)

## Communication Protocol

### WebSocket Connection
- **Default URL**: ws://localhost:8080
- **Message Format**: JSON-based command structure
- **Graceful Fallback**: Handles disconnection and reconnection
- **Command Types**:
  - grid-button: Button press events
  - led-update: Pixel state changes
  - effect: Visual effect triggers
  - preset: Configuration loading

## Design Patterns

### Component Design
- **Single Responsibility**: Each grid handles specific actions
- **Observer Pattern**: WebSocket message handling
- **State Management**: Centralized LED pixel state
- **Event-Driven**: User interactions trigger state changes

### Performance Optimizations
- **RequestAnimationFrame**: Smooth animations
- **CSS Transforms**: Hardware-accelerated transitions
- **Efficient DOM Updates**: Minimal reflows and repaints
- **Memory Management**: Proper event listener cleanup

## Development Tools
- **Node.js**: Runtime environment
- **npm**: Package management
- **Astro CLI**: Development server and build tools
- **Modern Browser APIs**: WebSocket, RequestAnimationFrame

## Future Technology Considerations
- **WebSocket Server**: Node.js/Express or Python backend
- **Hardware Integration**: Serial communication for LED strips
- **Database**: Preset and configuration storage
- **Real-time Features**: Multi-user synchronization
- **Mobile Support**: PWA capabilities
