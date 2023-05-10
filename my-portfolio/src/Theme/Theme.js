// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    sm: "21em", // 350px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em" // 1280px
  }
  // Other global properties...
});

export default theme;
