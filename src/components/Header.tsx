import { Box, Button, useColorMode } from '@chakra-ui/react';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box m={10} bg={colorMode === "light" ? "brand.light" : "brand.dark"} position={"fixed"} zIndex={1}>
      <Button onClick={toggleColorMode} borderRadius={"full"}>
        {colorMode === "light" ? "Dark Mode" : "Light Mode"}
      </Button>
    </Box>
  );
};

export default Header;
