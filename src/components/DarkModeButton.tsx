import React from 'react';
import { Box, useColorMode } from '@chakra-ui/react';
import './DarkModeButton.css';

const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box className="toggle-switch" >
      <label className={`switch-label ${colorMode === 'light' ? 'light-mode' : 'dark-mode'}`}>
        <input onClick={toggleColorMode} type="checkbox" className="checkbox" checked={colorMode === 'dark'} readOnly />
        <span className="slider"></span>
      </label>
    </Box>
  );
};

export default DarkModeButton;