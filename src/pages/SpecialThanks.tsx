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
      overflow={{ base: 'hidden', md: 'hidden' }}
    >
        <Logo />
      <VStack spacing={8} maxWidth="890px">
        <Text fontSize="2xl" lineHeight="tall">
          ¡Gracias por llegar hasta acá! Nos alegra que te tomes el tiempo para conocer más sobre nosotros. 
          En <strong>Busy</strong>, queremos apoyar a quienes lo merecen.
        </Text>
        <Text fontSize="2xl" lineHeight="tall">
          Si te gusta lo que ves y quieres seguir descubriendo sobre lo que hacemos, ¡te invitamos a que te unas a nuestra familia y nos sigas en nuestras redes! 
          Siempre estamos preparando algo especial para la gente busy como vos
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
