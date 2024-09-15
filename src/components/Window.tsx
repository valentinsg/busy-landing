import React, { useEffect, useState, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface WindowProps {
  children: ReactNode;
  fadeTime: number;  // Tiempo personalizado de fade
}

const Window: React.FC<WindowProps> = ({ children, fadeTime }) => {
  const [scrollY, setScrollY] = useState<number>(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fadeEffect = 1 - scrollY / fadeTime;  // Ajustamos el tiempo de fade

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{ opacity: fadeEffect > 0 ? fadeEffect : 0, transition: `opacity ${fadeTime / 1000}s ease` }} // Efecto personalizado
    >
      {children}
    </Box>
  );
};

export default Window;
