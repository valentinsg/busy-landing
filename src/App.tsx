import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Procesos from './pages/Procesos';
import Comunidad from './pages/Comunidad';
import Feedback from './pages/Feedback';
import MenuButton from './components/MenuButton';
import MenuOverlay from './components/MenuOverlay';
import Sidebar from './components/Sidebar';
import Preaccess from './pages/PreAccess';
import SpecialThanks from './pages/SpecialThanks';
import Anuncios from './pages/Anuncios';

function AppContent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const handleMenuToggle = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  const isSpecialThanksPage = location.pathname === '/special-thanks';

  return (
    <Flex>
      {/* Left Sidebar */}
        <Box>
          <Sidebar />
        </Box>

      {/* Main Content Area */}
      <Box flex={1}>
        {!isSpecialThanksPage && (
          <Flex justifyContent="flex-end" mr={12} mt={{base: 14, md:12}}>
            {/* Menu Button aligned to the right */}
            <MenuButton onClick={handleMenuToggle} />
          </Flex>
        )}

        {/* Routes */}
        <Box p={4}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/procesos" element={<Procesos />} />
            <Route path="/comunidad" element={<Comunidad />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/preaccess" element={<Preaccess />} />
            <Route path="/special-thanks" element={<SpecialThanks />} />
            <Route path="/nuevos-anuncios" element={<Anuncios />} />
          </Routes>
        </Box>
      </Box>

      {/* Menu Overlay */}
      {!isSpecialThanksPage && <MenuOverlay isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;