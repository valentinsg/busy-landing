import { IconButton, useColorModeValue } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const SocialButtons = () => {
  const iconColor = useColorModeValue('brand.dark', 'brand.white');
  const bgHoverColor = useColorModeValue('brand.white', 'brand.dark');
  
  return (
    <>
      <IconButton
        icon={<FontAwesomeIcon icon={faTiktok} size="2x" />}
        aria-label={'TikTok'}
        w={"75%"}
        onClick={() => window.open('https://www.tiktok.com/')}
        color={iconColor}
        bg="transparent"
        _hover={{
          transform: 'scale(1.15)',
          bg: bgHoverColor,
        }}
        transition="transform 0.3s ease"
        mt={14}
        borderRadius={"100%"}
      />
      <IconButton
        icon={<FontAwesomeIcon icon={faInstagram} size="2x" />}
        aria-label={'Instagram'}
        w={"75%"}
        onClick={() => window.open('https://www.instagram.com/')}
        color={iconColor}
        bg="transparent"
        _hover={{
          transform: 'scale(1.15)',
          bg: bgHoverColor,
        }}
        transition="transform 0.3s ease"
        mt={6}
        borderRadius={"100%"}
      />
    </>
  );
};

export default SocialButtons;
