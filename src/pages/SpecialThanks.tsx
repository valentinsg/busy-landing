import React from 'react';
import { Flex, Text, Button, VStack, Heading, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SpecialThanks = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      p={8}
      textAlign="center"
      bg={colorMode === "dark" ? "brand.dark" : "brand.light"}
    >
      <VStack spacing={8} maxWidth="800px">
        <Heading as="h1" size="2xl" mb={6} fontFamily="heading">
          Gracias por tu interés en Busy
        </Heading>
        <Text fontSize="xl" lineHeight="tall" fontFamily="text">
          Primero que nada, gracias, en nombre de toda la gente que trabaja para que Busy exista.
          Gracias por tomarte el tiempo de escanear este QR y llegar hasta acá.
        </Text>
        <Text fontSize="xl" lineHeight="tall" fontFamily="text">
          Si te interesa saber quiénes somos, qué hacemos y cómo lo hacemos, te invitamos a que continúes explorando.
        </Text>
        <Link to="/home">
          <Button 
            colorScheme="teal" 
            size="lg" 
            fontFamily="buttons"
            px={8}
            py={6}
            fontSize="xl"
            _hover={{ 
              transform: 'translateY(-2px)', 
              boxShadow: 'lg' 
            }}
            transition="all 0.2s"
          >
            Continuar
          </Button>
        </Link>
      </VStack>
    </Flex>
  );
};

export default SpecialThanks;