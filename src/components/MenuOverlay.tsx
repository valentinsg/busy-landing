import React from 'react';
import { Box, VStack, Text, Badge } from '@chakra-ui/react';
import './MenuOverlay.css';
import { Link } from 'react-router-dom';
import DarkModeButton from './DarkModeButton';
import useScrollLock from '../helpers/useScrollLock';
import { isMobile } from '../helpers/isMobile';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  const isMobileDevice = isMobile();

  useScrollLock(isOpen && isMobileDevice);
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
      <VStack spacing={8} color="white" textAlign="center">
        <Text fontSize="2xl" cursor="pointer"><Link to="/home" onClick={onClose}>Casita</Link></Text>
        <Text fontSize="2xl" cursor="pointer"><Link to="https://www.busy.com.ar" target="_blank" rel="noopener noreferrer">Compra</Link></Text>
        <Text fontSize="2xl" cursor="pointer" ml={14}>
          <Link to="/nuevos-anuncios" onClick={onClose}>
            Anuncios <Badge colorScheme="yellow" ml={1}>Nuevo</Badge>
          </Link>
        </Text>
        <Text fontSize="2xl" cursor="pointer"><Link to="/procesos" onClick={onClose}>Productos</Link></Text>
        <Text fontSize="2xl" cursor="pointer"><Link to="/timeline" onClick={onClose}>Línea temporal</Link></Text>
        <Text fontSize="2xl" cursor="pointer"><Link to="/comunidad" onClick={onClose}>Comunidad</Link></Text>

        <Text fontSize="2xl" cursor="pointer"><Link to="/feedback" onClick={onClose}>Espacio para Feedback</Link></Text>
      </VStack>
      <Box display={{ base: 'flex', md: 'none' }} mt={28} mb={-6}>
        <DarkModeButton />
      </Box>
    </Box>
  );
};

export default MenuOverlay;
