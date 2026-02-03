// Content script for MapCzar
// Creates and manages the map overlay

(function() {
  'use strict';

  let overlayCreated = false;

  // Listen for messages from the background script
  window.addEventListener('message', (event) => {
    if (event.source !== window) return;
    
    if (event.data.type === 'MAPCZAR_TOGGLE') {
      if (!overlayCreated) {
        createOverlay();
        overlayCreated = true;
      } else {
        toggleOverlay();
      }
    }
  });

  function createOverlay() {
    // Create overlay container
    const overlay = document.createElement('div');
    overlay.id = 'mapczar-overlay';
    overlay.className = 'mapczar-overlay';
    
    // Create toolbar
    const toolbar = document.createElement('div');
    toolbar.className = 'mapczar-toolbar';
    
    // Create close button
    const closeButton = document.createElement('button');
    closeButton.className = 'mapczar-close-btn';
    closeButton.innerHTML = '&times;';
    closeButton.title = 'Close (ESC)';
    closeButton.addEventListener('click', closeOverlay);
    
    // Create title
    const title = document.createElement('div');
    title.className = 'mapczar-title';
    title.textContent = 'MapCzar';
    
    toolbar.appendChild(title);
    toolbar.appendChild(closeButton);
    
    // Create map container
    const mapContainer = document.createElement('div');
    mapContainer.id = 'mapczar-map';
    mapContainer.className = 'mapczar-map';
    
    // Add Leaflet placeholder content
    const placeholder = document.createElement('div');
    placeholder.className = 'mapczar-placeholder';
    placeholder.innerHTML = `
      <div class="mapczar-placeholder-content">
        <h2>🗺️ MapCzar</h2>
        <p>Interactive Map Viewer</p>
        <div class="mapczar-info">
          <p><strong>Leaflet Integration Ready</strong></p>
          <p>This is a placeholder for the Leaflet map component.</p>
          <p>To integrate Leaflet, include the Leaflet library and initialize the map here.</p>
        </div>
        <div class="mapczar-features">
          <div class="feature">✨ Full-screen overlay</div>
          <div class="feature">🎨 Smooth animations</div>
          <div class="feature">⌨️ ESC key support</div>
          <div class="feature">🗺️ Leaflet-ready</div>
        </div>
      </div>
    `;
    
    mapContainer.appendChild(placeholder);
    
    // Assemble overlay
    overlay.appendChild(toolbar);
    overlay.appendChild(mapContainer);
    
    // Add to page
    document.body.appendChild(overlay);
    
    // Trigger animation
    setTimeout(() => {
      overlay.classList.add('mapczar-visible');
    }, 10);
    
    // Add ESC key listener
    document.addEventListener('keydown', handleEscKey);
  }

  function toggleOverlay() {
    const overlay = document.getElementById('mapczar-overlay');
    if (overlay) {
      if (overlay.classList.contains('mapczar-hidden')) {
        overlay.classList.remove('mapczar-hidden');
        overlay.classList.add('mapczar-visible');
      } else {
        closeOverlay();
      }
    }
  }

  function closeOverlay() {
    const overlay = document.getElementById('mapczar-overlay');
    if (overlay) {
      overlay.classList.remove('mapczar-visible');
      overlay.classList.add('mapczar-hidden');
    }
  }

  function handleEscKey(event) {
    if (event.key === 'Escape') {
      const overlay = document.getElementById('mapczar-overlay');
      if (overlay && !overlay.classList.contains('mapczar-hidden')) {
        closeOverlay();
      }
    }
  }

  // Initialize Leaflet map (placeholder function)
  function initializeLeafletMap() {
    // This is where Leaflet map initialization would go
    // Example:
    // const map = L.map('mapczar-map').setView([51.505, -0.09], 13);
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    console.log('MapCzar: Ready for Leaflet integration');
  }

})();
