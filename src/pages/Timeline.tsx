import { Box, Heading, Text, HStack } from '@chakra-ui/react';
import { FaCoins, FaCogs, FaExchangeAlt, FaFileContract } from 'react-icons/fa';
import React from 'react';

const Timeline = () => {
  const steps = [
    { title: 'Lanzamiento de la moneda', icon: FaCoins },
    { title: 'Desarrollo de la plataforma', icon: FaCogs },
    { title: 'Integración con otras criptomonedas', icon: FaExchangeAlt },
    { title: 'Implementación de contratos', icon: FaFileContract },
  ];

  return (
    <Box display="flex" flexDir="column" minHeight="100vh" alignItems="center" justifyContent="center">
      <Box textAlign="center">
        <Heading size="2xl">Roadmap</Heading>
        <Box mt={4}>
          <HStack spacing={3}>
            {steps.map((step, index) => (
              <Box
                key={index}
                display="flex"
                flexDir="column"
                alignItems="center"
                position="relative"
                animation={`moveUpDown 2s infinite ${index * 0.5}s`}
              >
                <Box
                  as={step.icon}
                  boxSize="50px"
                  borderRadius="full"
                  color="gray.500"
                  bg="gray.200"
                  p={2}
                  position="relative"
                >
                  {index !== steps.length - 1 && (
                    <Box
                      position="absolute"
                      top="50%"
                      left="100%"
                      transform="translateY(-50%)"
                      width="50%"
                      height="2px"
                      bg="gray.500"
                    />
                  )}
                </Box>
                <Text fontSize="lg" mt={2}>
                  {step.title}
                </Text>
              </Box>
            ))}
          </HStack>
        </Box>
        <Box mt={4}>
          <svg width="100%" height="2">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="gray" strokeWidth="2" />
          </svg>
        </Box>
      </Box>
    </Box>
  );
};

export default Timeline;