# MapCzar 🗺️

A Chrome Extension (Manifest v3) that provides an interactive map overlay with smooth animations and Leaflet integration.

## Features

- 🎯 **Full-screen overlay**: Clean, distraction-free map viewing experience
- ✨ **Smooth animations**: Reader mode-style transitions with cubic-bezier easing
- 🗺️ **Leaflet ready**: Built-in support for Leaflet map integration
- ⌨️ **Keyboard shortcuts**: ESC key to close the overlay
- 🎨 **Modern UI**: Beautiful gradient toolbar and responsive design
- 🔧 **Manifest v3**: Uses the latest Chrome Extension architecture

## Installation

### Loading the Extension in Chrome

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in the top-right corner)
4. Click "Load unpacked"
5. Select the `mapczar` directory
6. The MapCzar icon should appear in your extensions toolbar

## Usage

### Opening the Map Overlay

1. Click the MapCzar icon in your Chrome toolbar
2. The full-screen map overlay will appear with a smooth animation
3. Press ESC or click the close button (×) to dismiss the overlay

### Keyboard Shortcuts

- **ESC**: Close the map overlay

## Project Structure

```
mapczar/
├── manifest.json          # Extension configuration (Manifest v3)
├── background.js          # Service worker for handling extension events
├── content.js            # Content script for injecting the overlay
├── styles.css            # Styles for the overlay and animations
├── icons/                # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md             # This file
```

## Technical Details

### Manifest V3

This extension uses Chrome's latest Manifest V3 architecture:
- **Service Worker**: `background.js` handles extension icon clicks
- **Content Scripts**: `content.js` is injected into pages to create the overlay
- **Permissions**: Minimal permissions (activeTab, scripting)

### Animation System

The overlay uses CSS transitions with cubic-bezier easing for smooth animations:
- Fade in/out effect with opacity
- Scale transformation for a "reader mode" feel
- 300ms duration for optimal user experience

### Leaflet Integration (Placeholder)

The extension includes a placeholder for Leaflet map integration. To add a real map:

1. Include the Leaflet library in your manifest.json
2. Update `content.js` to initialize the map:

```javascript
function initializeLeafletMap() {
  const map = L.map('mapczar-map').setView([51.505, -0.09], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
}
```

## Browser Compatibility

- ✅ Chrome 88+ (Manifest V3 support)
- ✅ Microsoft Edge 88+ (Chromium-based)
- ✅ Brave
- ✅ Opera

## Development

### File Descriptions

- **manifest.json**: Extension metadata, permissions, and configuration
- **background.js**: Handles extension icon clicks and communicates with content scripts
- **content.js**: Creates and manages the full-screen overlay
- **styles.css**: All styling including animations, responsive design, and theming

### Customization

You can customize the appearance by modifying:
- Colors and gradients in `styles.css`
- Animation timings and easing functions
- Toolbar layout and buttons
- Map container size and behavior

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.