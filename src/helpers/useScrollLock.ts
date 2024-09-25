import { useEffect } from 'react';

const useScrollLock = (isOpen: boolean): void => {
  useEffect(() => {
    
    // Verificamos si la pantalla es móvil
    const isMobile = window.innerWidth <= 768;

    if (isOpen && isMobile) {
        
      // Guardamos el estado original del overflow
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Función de limpieza
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    } else {

      // Restablecemos el estado original del overflow
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);
};

export default useScrollLock;