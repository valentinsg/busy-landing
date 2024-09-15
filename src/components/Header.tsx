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
      bg={colorMode === 'light' ? 'brand.light' : 'brand.dark'}
      position="fixed"
      zIndex={1}
      display="flex"
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
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>}
        size="lg"
        bg="transparent"
        _hover={{ bg: 'none' }}
      />

      {/* Menú Overlay */}
      <MenuOverlay isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Header;
