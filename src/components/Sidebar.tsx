import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import DarkModeButton from './DarkModeButton';
import SocialButtons from './SocialButtons';

const Sidebar = () => {
  return (
    <Flex
      flexDir={{ base: "row", md: "column" }} 
      alignItems={"center"}
      mt={14}
      mx={{ base: 0, md: 10 }}
      ml={{ base: 10, md: 0 }}
      position="fixed"
      display={'flex'}
      w={"10vw"}
      justifyContent="space-between"
      bg={"transparent"}
      zIndex={999}
    >

      {/* Botón para el modo oscuro */}
      <Box display={{ base: 'none', md: 'flex' }} >
        <DarkModeButton />
      </Box>

      {/* Botón redes sociales */}
      <SocialButtons />

    </Flex>
  );
};

export default Sidebar;