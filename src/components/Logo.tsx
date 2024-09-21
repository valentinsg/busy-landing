import React, { useState } from 'react';
import { Image, useColorMode, Box } from '@chakra-ui/react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import LogoLight from '../img/logo-busy-light.png';
import LogoDark from '../img/logo-busy-dark.png';

const MotionBox = motion(Box);

const Logo: React.FC = () => {
  const { colorMode } = useColorMode();
  const logoSrc = colorMode === 'light' ? LogoLight : LogoDark;

  // Motion values for X and Y rotation
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // We apply some spring to smooth the motion
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  // State to track if the mouse is being dragged
  const [isDragging, setIsDragging] = useState(false);

  // Handle mouse down to start drag
  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    handleInteraction(event);
  };

  // Handle mouse up to end drag
  const handleMouseUp = () => {
    setIsDragging(false);

    // Reset the logo to its original position after the drag ends
    rotateX.set(0);
    rotateY.set(0);
  };

  // Handle mouse movement while dragging
  const handleMouseMove = (event: React.MouseEvent) => {
    if (isDragging) {
      handleInteraction(event);
    }
  };

  // Function to handle the rotation based on mouse interaction
  const handleInteraction = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    // Calculate the center of the screen
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;

    // Calculate the distance of the click from the center of the screen
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Define sensitivity for the rotation, feel free to adjust this
    const sensitivity = 0.05;

    // Apply rotation inversely proportional to the click location
    rotateX.set(deltaY * sensitivity); // Rotate in the X axis (vertical tilt)
    rotateY.set(-deltaX * sensitivity); // Rotate in the Y axis (horizontal tilt)
  };

  return (
    <MotionBox
      className="logo-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Reset when the mouse leaves the container
      style={{
        rotateX: springRotateX, // Using the smooth spring value
        rotateY: springRotateY,
      }}
      whileHover={{
        scale: 1.02, // Slightly scale the logo on hover
        transition: { duration: 0.3 },
      }}
      whileTap={{
        scale: 0.95, // Slightly shrink the logo on click/tap
        transition: { duration: 0.1 },
      }}
    >
      <Image
        ml={10}
        w="685px"
        src={logoSrc}
        alt="Logo Busy"
        transition="opacity 0.3s ease"
      />
    </MotionBox>
  );
};

export default Logo;
