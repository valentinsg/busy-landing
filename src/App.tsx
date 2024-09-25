import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleMenuToggle = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <Router>
      <Flex>
        {/* Left Sidebar */}
        <Box >
          <Sidebar />
        </Box>

        {/* Main Content Area */}
        <Box flex={1}>
          <Flex justifyContent="flex-end" mr={12} mt={12}>
            {/* Menu Button aligned to the right */}
            <MenuButton onClick={handleMenuToggle} />
          </Flex>

          {/* Routes */}
          <Box p={4}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/Timeline" element={<Timeline />} />
              <Route path="/procesos" element={<Procesos />} />
              <Route path="/comunidad" element={<Comunidad />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/preaccess" element={<Preaccess />} />
            </Routes>
          </Box>
        </Box>

        {/* Menu Overlay */}
        <MenuOverlay isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Router>
  );
}

export default App;