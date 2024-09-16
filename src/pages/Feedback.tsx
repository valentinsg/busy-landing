import { Box, Button, Input, Textarea } from '@chakra-ui/react';
import React from 'react';

const Feedback = () => {
  return (
    <Box p={8} justifyContent={"center"}>
      <Input placeholder="Tu nombre" mb={4} />
      <Input placeholder="Tu correo electrónico" mb={4} />
      <Textarea placeholder="Escribe tu feedback" mb={4} />
      <Button >Enviar</Button>
    </Box>
  );
};

export default Feedback;