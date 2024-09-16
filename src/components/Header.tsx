import React from 'react';
import { Box, IconButton, useColorMode, useDisclosure } from '@chakra-ui/react';
import MenuOverlay from './MenuOverlay';
import './DarkModeButton.css';


const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      m={10}
      position="fixed"
      zIndex={1}
      display="flex"
      w={"90vw"}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box className="toggle-switch" >
        <label className={`switch-label ${colorMode === 'light' ? 'light-mode' : 'dark-mode'}`}>
          <input  onClick={toggleColorMode} type="checkbox" className="checkbox" checked={colorMode === 'dark'} readOnly />
          <span className="slider"></span>
        </label>
      </Box>
      
      {/* Botón para desplegar el menú */}
      <IconButton
        aria-label="Open menu"
        onClick={onOpen}
        bg="transparent"
        _hover={{ bg: 'none' }}
      />

      {/* Menú Overlay */}
      <MenuOverlay isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Header;
