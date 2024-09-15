import React from 'react';
import { Text } from '@chakra-ui/react';

interface TextScrollProps {
  text: string;
}

const TextScroll: React.FC<TextScrollProps> = ({ text }) => {
  return (
    <Text fontSize="2xl" textAlign="center">
      {text}
    </Text>
  );
};

export default TextScroll;
