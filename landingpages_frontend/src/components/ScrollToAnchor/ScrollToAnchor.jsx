import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToAnchor = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 500); // Aumente o timeout se necessário
      }
    }
  }, [location]);

  return null;
};
