import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Window from './components/Window';
import Logo from './components/Logo';
import TextScroll from './components/TextScroll';

const App: React.FC = () => {
  return (
    <Box display={"flex"} flexDir={"column"} minHeight="100vh" overflow="hidden" sx={{ '&::-webkit-scrollbar': { display: 'none' } }}>
      <Header />
      {/* Pasamos un tiempo personalizado a cada Window */}
      <Window fadeTime={200} height='625px'>
        <Logo />
       </Window>
      <Window fadeTime={800} height='200px'>
        <TextScroll text="Bienvenido a Busy, la marca para los que nunca se detienen." />
      </Window>
      <Window fadeTime={1000} height='400px'>
        <TextScroll text="Explora nuestros productos únicos." />
      </Window>
    </Box>
  );
}

export default App;
