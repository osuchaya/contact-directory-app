// TODO: Create a service worker that caches static assets:
export const registerSW = () => {
    // Check that service workers are supported
  if ('serviceWorker' in navigator) {
      // Use the window load event to keep the page load performant
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
      });
    }
  };