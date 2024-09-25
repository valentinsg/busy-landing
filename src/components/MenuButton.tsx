import React, { useState } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

const MenuButton = ({ onClick }: { onClick: () => void }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick(); // Abrir el menú
  };

  // Colores y sombras personalizados
  const barColor = useColorModeValue('brand.dark', '#d0d0d0');
  const backgroundColor = useColorModeValue('brand.white', 'brand.dark');
  const boxShadow = useColorModeValue('0 2px 10px rgba(0,0,0,0.1)', '0 2px 10px rgba(0,0,0,0.2)');

  return (
    <Box
      onClick={handleClick}
      position={"fixed"}
      width={{base: "60px", md:"50px"}}
      height={{base: "60px", md:"50px"}}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      borderRadius="full"
      bg={backgroundColor}
      boxShadow={boxShadow}
      transition="all 0.3s ease"
      _hover={{ transform: 'scale(1.05)' }}
      zIndex={1001}
    >
      <Box
        as="span"
        width="35px"
        height="4px"
        backgroundColor={barColor}
        position="absolute"
        transform={isClicked ? 'rotate(45deg)' : 'translateY(-8px)'}
        transition="all 0.3s ease"
      />
      <Box
        as="span"
        width="35px"
        height="4px"
        backgroundColor={barColor}
        position="absolute"
        transform={isClicked ? 'rotate(-45deg)' : 'translateY(8px)'}
        transition="all 0.3s ease"
      />
    </Box>
  );
};

export default MenuButton;
