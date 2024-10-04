import React, { useState, useEffect } from 'react';
import { Image, Box, Text, Flex, keyframes } from '@chakra-ui/react';

const scrollAnimation = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const phrases = [
  "Para aquellos que están siempre en movimiento, Busy es tu compañero constante.",
  "Transformando la prisa en productividad, Busy entiende tu ritmo de vida.",
  "En el ajetreo diario, Busy te ayuda a encontrar tu equilibrio.",
  "Busy: porque tu tiempo es valioso y tus metas son importantes.",
  "Simplificando lo complejo, Busy hace que cada minuto cuente."
];

interface ContentScrollProps {
  content: string;
}

const ContentScroll: React.FC<ContentScrollProps> = ({ content }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Flex flexDir="column" alignItems="center">
      <Text fontSize="3xl" mb={4} fontFamily="Fugaz One" textShadow="0px 3px 6px rgba(0, 0, 0, 0.5)">
        Dos amigos, una visión.
      </Text>
      <Box
        overflow="hidden"
        borderRadius="25px"
        boxShadow="0px 5px 18px rgba(0, 0, 0, 0.62)"
        maxW="95%"
        mx="auto"
      >
        <Image
          src={content}
          objectFit="cover"
          w="100%"
          h="auto"
          transition="transform 0.4s ease-in-out"
          _hover={{ transform: 'scale(1.08)' }}
        />
      </Box>
      <Box
        position="relative"
        width="95%"
        height="50px"
        overflow="hidden"
        mt={4}
        borderRadius="25px"
      >
        <Text
          fontSize="xl"
          fontFamily="Fugaz One"
          textShadow="0px 3px 6px rgba(0, 0, 0, 0.5)"
          whiteSpace="nowrap"
          mx={4}
          position="absolute"
          animation={`${scrollAnimation} 20s linear infinite`}
        >
          {phrases[currentPhraseIndex]}
        </Text>
      </Box>
    </Flex>
  );
};

export default ContentScroll;