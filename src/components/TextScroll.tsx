import React from 'react';
import { Text } from '@chakra-ui/react';

interface TextScrollProps {
  text: string;
}

const TextScroll: React.FC<TextScrollProps> = ({ text }) => {
  return (
    <Text 
      fontSize="2xl" 
      textAlign="center"
      color="gray.700"       // Color más suave
      fontWeight="bold"      // Texto destacado
      transition="color 0.3s" // Transición suave al hover
      _hover={{ color: 'gray.900' }}  // Cambia el color al hacer hover
    >
      {text}
    </Text>
  );
};

export default TextScroll;
