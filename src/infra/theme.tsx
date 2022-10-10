import { createTheme, Theme } from "@mui/material/styles";
import { red, green, grey } from "@mui/material/colors";
// Create a theme instance.

const dark = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#333333",
    },
    secondary: {
      main: grey[100],
    },
    primary: {
      main: "#556cd6",
    },
    error: {
      main: red.A400,
    },
    success: {
      main: green.A400,
    },
  },
});
const light = createTheme({
  palette: {
    mode: "light",
    background: {
      default: grey[200],
    },
    secondary: {
      main: grey.A100,
    },
    primary: {
      main: "#556cd6",
    },
    error: {
      main: red.A400,
    },
    success: {
      main: green.A400,
    },
  },
});

export { dark, light };
