import React from 'react';
import { Image, useColorMode } from '@chakra-ui/react';
import LogoLight from '../img/logo-busy-light.png';
import LogoDark from '../img/logo-busy-dark.png';
import './Logo.css';

const Logo: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <div className="logo-container">
      <Image
        ml={10}
        w="670px"
        src={colorMode === 'light' ? LogoLight : LogoDark}
        alt="Logo Busy"
        style={{ opacity: '1', transition: 'opacity 0.5s ease' }}
        className="logo"
      />
    </div>
  );
};

export default Logo;
