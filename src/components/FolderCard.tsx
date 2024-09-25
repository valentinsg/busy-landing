import React from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface FolderCardProps {
  color: string;
  onClick: () => void;
  id: number;
  description: string;
  name: string;
  isFocused: boolean;
  totalFolders: number;
}

export const FolderCard: React.FC<FolderCardProps> = ({ color, onClick, id, name, description, isFocused, totalFolders }) => {
  const getPosition = () => {
    if (isFocused) return 0;
    const offset = 100 / (totalFolders - 1);
    return id < totalFolders / 2 ? -offset : offset;
  };

  return (
    <motion.div
      initial={{ x: getPosition(), y: 0, rotate: id * -5, scale: 0.9 }}
      animate={{
        x: isFocused ? 0 : getPosition(),
        y: isFocused ? 0 : id * 10,
        rotate: isFocused ? 0 : id * -5,
        scale: isFocused ? 1 : 0.9,
        zIndex: isFocused ? 10 : id,
      }}
      transition={{ duration: 0.3 }}
    >
      <Box
        w="250px"
        h="300px"
        bg={color}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        cursor="pointer"
        boxShadow="0 12px 20px rgba(0, 0, 0, 0.3)"
        borderRadius="md"
        onClick={onClick}
      >
        <Box color="white" fontSize="2xl" fontWeight="bold" textShadow="0 2px 4px rgba(0,0,0,0.3)" mb={4}>
          {name}
        </Box>
        <Box color="white" fontSize="md" textAlign="center" px={4}>
          {description}
        </Box>
      </Box>
    </motion.div>
  );
};