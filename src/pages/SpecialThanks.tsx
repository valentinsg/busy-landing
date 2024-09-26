import React from 'react';
import { Flex, Text, Button, VStack, useColorMode} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const SpecialThanks = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="95vh"
      p={8}
      textAlign="center"
      bg={colorMode === "dark" ? "brand.dark" : "brand.light"}
    >
        <Logo />
      <VStack spacing={8} maxWidth="890px">
        <Text fontSize="2xl" lineHeight="tall" fontFamily="text">
          Si te interesa saber quiénes somos, qué hacemos y cómo lo hacemos, te invitamos a que continúes explorando.
          Siempre tenemos algo preparado para la gente busy
        </Text>
        <Link to="/home">
          <Button 
            size="lg" 
            fontFamily="buttons"
            px={12}
            py={8}
            fontSize="xl"
            _hover={{ 
              transform: 'translateY(-2px)', 
              boxShadow: 'lg' 
            }}
            transition="all 0.2s"
          >
            Seguir explorando
          </Button>
        </Link>
      </VStack>
    </Flex>
  );
};

export default SpecialThanks;