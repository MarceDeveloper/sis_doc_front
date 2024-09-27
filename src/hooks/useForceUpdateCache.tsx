import { useEffect } from 'react';

export const useForceUpdateCache = () => {
  useEffect(() => {
    const checkVersion = async () => {
      const res = await fetch('/manifest.json', { cache: 'no-store' });
      const newManifest = await res.json();
      const oldManifest = JSON.parse(localStorage.getItem('manifest') || '{}');

      if (JSON.stringify(newManifest) !== JSON.stringify(oldManifest)) {
        localStorage.setItem('manifest', JSON.stringify(newManifest));
        window.location.reload();
      }
    };

    checkVersion();
    const interval = setInterval(checkVersion, 60000); // Verifica cada 60 segundos

    return () => clearInterval(interval);
  }, []);
};

