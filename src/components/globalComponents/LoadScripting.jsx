let isScriptLoaded = false;

export function loadGoogleMapsScript(apiKey, libraries) {
  return new Promise((resolve, reject) => {
    if (isScriptLoaded) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${libraries.join(',')}`;
    script.id = 'google-maps-script';
    script.onload = () => {
      isScriptLoaded = true;
      resolve();
    };
    script.onerror = () => {
      reject(new Error('Failed to load Google Maps API'));
    };

    document.body.appendChild(script);
  });
}