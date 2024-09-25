import { Box, Heading, Text, HStack, Tooltip, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

const Timeline = () => {
  const currentEra = 1 // 1 for pre-launch, 2 for post-launch, 3 for future era
  const isMobile = useBreakpointValue({ base: true, md: false });

  const eras = [
    { title: 'Pre-Salida', 
      description: 'Etapa antes del lanzamiento oficial, reconociendo el mercado y como asentarnos como marca antes de salir con nuestros productos', 
      color: 'blue.500' 
    },
    { title: 'Post-Salida', description: 'Después del lanzamiento, en desarrollo', color: 'green.500' },
    { title: 'Futuro', description: 'Próxima era', color: 'gray.500' },
  ];

  return (
    <Box display="flex" flexDir="column" minHeight="100vh" alignItems="center" justifyContent="flex-start">
      <Heading size="2xl" textAlign="center" mb={4}>
        Línea temporal de Busy
      </Heading>
      <Text size="lxl" textAlign={"center"}>
        Descubrí acontecimientos de la marca, en donde estamos y hacia dónde vamos.
      </Text>
      <HStack spacing={8} flexDir={isMobile ? 'column' : 'row'} alignItems="center">
        {eras.map((era, index) => (
          <Box
            key={index}
            display="flex"
            flexDir="column"
            alignItems="center"
            position="relative"
          >
            <Tooltip label={era.description} aria-label={era.description}>
              <Box
                width="10px"
                height="10px"
                borderRadius="50%"
                bg={currentEra >= index + 1 ? era.color : 'gray.300'}
                mb={2}
              />
            </Tooltip>
            <Text fontSize="lg">{era.title}</Text>
            {index < eras.length - 1 && (
              <Box
                width={isMobile ? '2px' : '100px'}
                height={isMobile ? '50px' : '2px'}
                bg={currentEra >= index + 1 ? era.color : 'gray.300'}
              />
            )}
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

export default Timeline;
