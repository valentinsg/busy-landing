import { Box, Button, Input, Textarea, Heading, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();

  const handleSubmit = () => {
    if (name && email && message) {
      // Aquí puedes enviar el feedback a un servidor o simplemente mostrar una notificación
      toast({
        title: "Feedback enviado.",
        description: "Gracias por tu feedback.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setName('');
      setEmail('');
      setMessage('');
    } else {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box 
      m={"auto"} 
      display={"flex"} 
      flexDir={"column"} 
      minHeight="100vh"  
      justifyContent={"center"} 
      w={"70%"} 
      alignItems={"center"} 
      zIndex={1}
    >
      <Heading mb={6} textAlign="center">¡Cuéntanos qué te parece Busy!</Heading>
      <Input 
        placeholder="Tu nombre" 
        mb={4} 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <Input 
        placeholder="Tu correo electrónico" 
        mb={4} 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <Textarea 
        placeholder="Escribe tu feedback" 
        mb={4} 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
      />
      <Button ml={"auto"} onClick={handleSubmit}>Enviar</Button>
    </Box>
  );
};

export default Feedback;
