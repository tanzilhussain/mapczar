// Background service worker for MapCzar
// Handles extension icon clicks and communicates with content scripts

chrome.action.onClicked.addListener((tab) => {
  // Inject the content script if it's not already injected
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: toggleMapOverlay
  });
});

// Function that will be executed in the page context
function toggleMapOverlay() {
  // Check if overlay already exists
  const existingOverlay = document.getElementById('mapczar-overlay');
  
  if (existingOverlay) {
    // If it exists, toggle it
    if (existingOverlay.classList.contains('mapczar-hidden')) {
      existingOverlay.classList.remove('mapczar-hidden');
    } else {
      existingOverlay.classList.add('mapczar-hidden');
    }
  } else {
    // If it doesn't exist, create it
    window.postMessage({ type: 'MAPCZAR_TOGGLE' }, '*');
  }
}
