import React from 'react';
import { Box, Text, VStack, useDisclosure } from '@chakra-ui/react';
import './MenuOverlay.css';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      bg="rgba(0, 0, 0, 0.8)"
      zIndex={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      className='menu-overlay'
    >
      <VStack spacing={6} color="white" textAlign="center">
        <Text fontSize="2xl" cursor="pointer" onClick={onClose}>Roadmap de la Marca</Text>
        <Text fontSize="2xl" cursor="pointer" onClick={onClose}>Procesos</Text>
        <Text fontSize="2xl" cursor="pointer" onClick={onClose}>Comunidad</Text>
        <Text fontSize="2xl" cursor="pointer" onClick={onClose}>Colabora con Nosotros</Text>
        <Text fontSize="2xl" cursor="pointer" onClick={onClose}>Visión de Futuro</Text>
        <Text fontSize="2xl" cursor="pointer" onClick={onClose}>Espacio para Feedback</Text>
      </VStack>
    </Box>
  );
};

export default MenuOverlay;
