import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import Window from '../components/Window';
import TextScroll from '../components/TextScroll';
import Logo from '../components/Logo';

const Home: React.FC = () => {
  return (
    <Box display={"flex"} flexDir={"column"} minHeight="100vh">
      <Header />
      {/* Pasamos un tiempo personalizado a cada Window */}
      <Window fadeTime={250} height='610px'>
        <Logo />
      </Window>
      <Window fadeTime={650}>
        <TextScroll text="Bienvenido a Busy, la marca para los que nunca se detienen." />
      </Window>
      <Window fadeTime={1000} height='400px'>
        <TextScroll text="Explora nuestros productos únicos." />
      </Window>
    </Box>
  ); 
}

export default Home;
