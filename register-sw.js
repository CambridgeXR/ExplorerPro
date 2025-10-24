// register-sw.js for VR Explorer 6
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('./sw.js', { scope: '/Explorer6/' });
      console.log('VR Explorer 6: serviceWorker registered.', reg);
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            console.log('VR Explorer 6: SW state changed to', newWorker.state);
          });
        }
      });
    } catch (err) {
      console.error('VR Explorer 6: SW registration failed:', err);
    }
  });
}
