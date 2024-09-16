import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import Procesos from './pages/Procesos';
import Comunidad from './pages/Comunidad';
import Colabora from './pages/Colabora';
import Feedback from './pages/Feedback';
import VisionFuturo from './pages/VisionFuturo';
import React from 'react';


function App() {
  return (
    <Router>
      <Box>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/procesos" element={<Procesos />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/colabora" element={<Colabora />} />
          <Route path="/vision-futuro" element={<VisionFuturo />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
