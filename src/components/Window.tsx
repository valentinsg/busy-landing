import React, { useEffect, useState, ReactNode } from 'react';
import { Box, ResponsiveValue } from '@chakra-ui/react';

interface WindowProps {
  children: ReactNode;
  fadeTime: number;
  height?: ResponsiveValue<number | string>;
}

const Window: React.FC<WindowProps> = ({ children, fadeTime, height }) => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeEffect = 1 - scrollY / fadeTime;

  return (
    <Box
      height={height}
      display="flex"
      justifyContent="center"
      alignItems="center"
      opacity={fadeEffect > 0 ? fadeEffect : 0}
      transition="opacity 0.5s ease, transform 0.5s ease" // Transiciones suaves
      position="relative"
      zIndex={fadeEffect > 0 ? 1 : -1}  // Controla la visibilidad para evitar que se solapen
    >
      {children}
    </Box>
  );
};

export default Window;
