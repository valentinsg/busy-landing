import React from 'react';
import { Box, Button, VStack, Text } from '@chakra-ui/react';
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
        <Button variant="ghost" onClick={onClose} color="white" mb={4}>
          Cerrar Menú
        </Button>
        <Text fontSize="2xl" cursor="pointer"><Link to="/roadmap" onClick={onClose}>Roadmap de la Marca</Link></Text>
        <Text fontSize="2xl" cursor="pointer"><Link to="/procesos" onClick={onClose}>Procesos</Link></Text>
        <Text fontSize="2xl" cursor="pointer"><Link to="/comunidad"   onClick={onClose}>Comunidad</Link></Text>
        <Text fontSize="2xl" cursor="pointer"><Link to="/colabora"  onClick={onClose}>Colabora con Nosotros</Link></Text>
        <Text fontSize="2xl" cursor="pointer"><Link to="/vision-futuro"  onClick={onClose}>Visión de Futuro</Link></Text>
        <Text fontSize="2xl" cursor="pointer"><Link to="/feedback" onClick={onClose}>Espacio para Feedback</Link></Text>

      <div className="menu">
        <div className="row1">
          <button className="menu-item top-left">Menu 1</button>
          <button className="menu-item top-right">Menu 2</button>
        </div>
        <div className="row2">
          <button className="menu-item bottom-left">Menu 3</button>
          <button className="menu-item bottom-right">Menu 4</button>
        </div>
      </div>
      </VStack>
    </Box>
  );
};

export default MenuOverlay;
