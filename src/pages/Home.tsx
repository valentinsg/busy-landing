import React from 'react';
import { Box} from '@chakra-ui/react';
import Window from '../components/Window';
import TextScroll from '../components/TextScroll';
import Logo from '../components/Logo';
import ContentScroll from '../components/ContentScroll';

const Home: React.FC = () => {
  return (
    <Box display={"flex"} flexDir={"column"} minHeight="100vh" scrollBehavior={"smooth"}>
      {/* Primera ventana con el logo */}
      <Window fadeTime={450} height={"85vh"}>
        <Logo />
      </Window>

      {/* Segunda ventana con la imagen, que solo aparece cuando la primera desaparece */}
      <Window fadeTime={4500} height='60vh'>
        <ContentScroll/>
      </Window>

      {/* Tercera ventana con el texto */}
      <Window fadeTime={1300} height='400px'>
        <TextScroll text="Explora nuestros productos únicos." />
      </Window>
    </Box>
  );
}

export default Home;
