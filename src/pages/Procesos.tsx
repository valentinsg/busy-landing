import React, { useState, useEffect } from 'react';
import { Box, IconButton, useColorMode } from '@chakra-ui/react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { FolderCard } from '../components/FolderCard';
import { motion, AnimatePresence } from 'framer-motion';

const Procesos: React.FC = () => {
  const { colorMode } = useColorMode();
  const folders = [
    { name: 'Drop 1', color: '#8C7B6D', description: 'Este es el primer drop con nuevos estilos.' },
    { name: 'Drop 2', color: '#A69F94', description: 'Este es el segundo drop, más innovador.' },
    { name: 'Drop 3', color: '#C0B7AE', description: 'Este drop trae comodidad y estilo.' },
  ];

  const [selectedFolder, setSelectedFolder] = useState<number | null>(null);
  const [focusedFolder, setFocusedFolder] = useState<number>(0);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedFolder !== null) {
        setSelectedFolder(null);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [selectedFolder]);

  const handleNext = () => {
    setFocusedFolder((prev) => (prev + 1) % folders.length);
  };

  const handlePrevious = () => {
    setFocusedFolder((prev) => (prev - 1 + folders.length) % folders.length);
  };

  const handleFolderClick = (index: number) => {
    if (index === focusedFolder) {
      setSelectedFolder(index);
    } else {
      setFocusedFolder(index);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" h="100vh" position="relative">
      <Box textAlign="center" p={4} fontSize="4xl" fontWeight="bold" color={colorMode === 'dark' ? 'gray.200' : 'gray.600'} letterSpacing="wide">
        Busy
        <Box fontSize="lg" mt={2}>
          Una breve descripción de lo que hace la marca Busy.
        </Box>
      </Box>

      <AnimatePresence>
        {selectedFolder === null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box position="relative" w="60vw" h="50vh" display="flex" justifyContent="center" alignItems="center">
              <IconButton 
                icon={<FiArrowLeft />} 
                onClick={handlePrevious} 
                position="absolute" 
                left="0" 
                top="50%"
                transform="translateY(-50%)"
                aria-label="Previous folder" 
                variant="ghost" 
                size="lg"
              />
              <IconButton 
                icon={<FiArrowRight />} 
                onClick={handleNext} 
                position="absolute" 
                right="0" 
                top="50%"
                transform="translateY(-50%)"
                aria-label="Next folder" 
                variant="ghost" 
                size="lg"
              />
              {folders.map((folder, index) => (
                <FolderCard
                  key={index}
                  id={index}
                  color={folder.color}
                  name={folder.name}
                  description={folder.description}
                  onClick={() => handleFolderClick(index)}
                  isFocused={focusedFolder === index}
                  totalFolders={folders.length}
                />
              ))}
            </Box>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              w="70vw"
              h="70vh"
              bg={folders[selectedFolder].color}
              color={colorMode === 'dark' ? 'gray.800' : 'white'}
              p={6}
              borderRadius="md"
              position="relative"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              boxShadow="0px 0px 30px -10px rgba(0, 0, 0, 0.5)"
            >
              <Box textAlign="center" mb={4}>
                <h1 style={{ fontFamily: 'Horizon', fontSize: '3xl' }}>Busy</h1>
                <h2>{folders[selectedFolder].name}</h2>
                <p>{folders[selectedFolder].description}</p>
              </Box>
              <IconButton
                aria-label="Cerrar carpeta"
                icon={<FiArrowLeft />}
                position="absolute"
                top={4}
                left={4}
                onClick={() => setSelectedFolder(null)}
                bg="rgba(0,0,0,0.3)"
                _hover={{ bg: 'rgba(0,0,0,0.5)' }}
                borderRadius="full"
              />
              <Box
                w="80%"
                h="50vh"
                bg="white"
                color="black"
                p={4}
                borderRadius="md"
                boxShadow="inset 0 0 10px rgba(0, 0, 0, 0.1)"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <p>Aquí se puede agregar el contenido del drop.</p>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Procesos;