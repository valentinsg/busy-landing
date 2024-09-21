import React from 'react';
import { Box, VStack, Text} from '@chakra-ui/react';
import './MenuOverlay.css';
import { Link } from 'react-router-dom';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      bg="rgba(0, 0, 0, 0.8)"
      zIndex={20}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className='menu-overlay'
    >
      <VStack spacing={6} color="white" textAlign="center">
        <Text fontSize="2xl" cursor="pointer"><Link to="/roadmap" onClick={onClose}>Roadmap de la Marca</Link></Text>
        <Text fontSize="2xl" cursor="pointer"><Link to="/procesos" onClick={onClose}>Procesos</Link></Text>
        <Text fontSize="2xl" cursor="pointer"><Link to="/comunidad"   onClick={onClose}>Comunidad</Link></Text>
        <Text fontSize="2xl" cursor="pointer"><Link to="/colabora"  onClick={onClose}>Colabora con Nosotros</Link></Text>
        <Text fontSize="2xl" cursor="pointer"><Link to="/feedback" onClick={onClose}>Espacio para Feedback</Link></Text>
        <Text fontSize="2xl" cursor="pointer"><Link to="https://www.busy.com.ar" target="_blank" rel="noopener noreferrer">Compra</Link></Text>      
      </VStack>
    </Box>
  );
};

export default MenuOverlay;
