import { IconButton, useColorModeValue, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const SocialButtons = () => {
  const iconColor = useColorModeValue('brand.dark', 'brand.white');
  const bgHoverColor = useColorModeValue('brand.white', 'brand.dark');
  
  return (
    <Flex
      mt={{ base: 1, md: 14 }}
      flexDir={{ base: 'row', md: 'column' }}
      gap={{ base: 10, md: 0 }}
    >
      <IconButton
        icon={<FontAwesomeIcon icon={faTiktok} size={window.innerWidth < 768 ? '2x' : '2x'} />}
        aria-label={'TikTok'}
        w={{ base: "50px", md: "75%" }}
        onClick={() => window.open('https://www.tiktok.com/@busy.streetwear')}
        color={iconColor}
        bg="transparent"
        _hover={{
          transform: 'scale(1.15)',
          bg: bgHoverColor,
        }}
        transition="transform 0.3s ease"
        borderRadius={"100%"}
      />
      <IconButton
        icon={<FontAwesomeIcon icon={faInstagram} size={window.innerWidth < 768 ? '2x' : '2x'} />}
        aria-label={'Instagram'}
        w={{ base: "50px", md: "75%" }}
        onClick={() => window.open('https://www.instagram.com/busy.streetwear')}
        color={iconColor}
        bg="transparent"
        _hover={{
          transform: 'scale(1.15)',
          bg: bgHoverColor,
        }}
        transition="transform 0.3s ease"
        mt={{ base: 0, md: 6 }}
        borderRadius={"100%"}
      />
      <IconButton
        icon={<FontAwesomeIcon icon={faBagShopping} size={window.innerWidth < 768 ? '2x' : '2x'} />} 
        aria-label={'Shop'}
        w={{ base: "50px", md: "75%" }}
        onClick={() => window.open('https://www.busy.com.ar/')} 
        color={iconColor}
        bg="transparent"
        _hover={{
          transform: 'scale(1.15)',
          bg: bgHoverColor,
        }}
        transition="transform 0.3s ease"
        mt={{ base: 0, md: 6 }}
        borderRadius={"100%"}
      />
    </Flex>
  );
};

export default SocialButtons;
