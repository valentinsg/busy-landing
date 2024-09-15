import { extendTheme } from '@chakra-ui/react';

// Colores principales de la marca y breakpoints
const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      dark: "#555454",    // Color dark mode
      light: "#d0d0d0",   // Color light mode
      accent: "#3182ce",  // Un color de acento
      textLight: "#ffffff", // Texto en modo oscuro
      textDark: "#000000",  // Texto en modo claro
    },
  },
  breakpoints: {
    base: "0em",     // Dispositivos pequeños
    sm: "30em",      // Móviles
    md: "48em",      // Tablets
    lg: "62em",      // Desktops
    xl: "80em",      // Pantallas grandes
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "brand.dark" : "brand.light",
        color: props.colorMode === "dark" ? "brand.textLight" : "brand.textDark",
      },
    }),
  },
  fonts: {
    buttons: "Helvetica, sans-serif",
    heading: "Roboto, sans-serif",
  },
});

export default theme;
