import React from 'react';
import { Box, Flex, useColorMode, useDisclosure } from '@chakra-ui/react';
import MenuOverlay from './MenuOverlay';
import './DarkModeButton.css';
import MenuButton from './MenuButton';
import SocialButtons from './SocialButtons';


const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Función que controla el toggle del menú
  const handleMenuToggle = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <Box
      mt={14}
      mx={10}
      position="fixed"
      display="flex"
      w={"90vw"}
      justifyContent="space-between"
      zIndex={998}
    >

        <Flex flexDir={"column"} alignItems={"center"}>

        {/* Botón para el modo oscuro */}
        <Box className="toggle-switch">
          <label className={`switch-label ${colorMode === 'light' ? 'light-mode' : 'dark-mode'}`}>
            <input onClick={toggleColorMode} type="checkbox" className="checkbox" checked={colorMode === 'dark'} readOnly />
            <span className="slider"></span>
          </label>
        </Box>

        <SocialButtons />
      </Flex >

      {/* Botón del menú */}
      <MenuButton onClick={handleMenuToggle} />
      {/* Menú */}
      <MenuOverlay isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Header;
