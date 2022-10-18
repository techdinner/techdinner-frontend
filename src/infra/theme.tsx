import { createTheme, Theme } from "@mui/material/styles";
import { red, green, grey } from "@mui/material/colors";
// Create a theme instance.

const dark = createTheme({
  typography: {
    allVariants: { color: grey[100] },
  },
  palette: {
    mode: "dark",
    // text: {
    //   primary: "#fff",
    //   disabled: "#b8b8b8",
    //   secondary: grey[200],
    // },
    background: {
      default: "#333333",
      paper: "#201f1f",
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
  typography: {
    allVariants: { color: grey[900] },
  },
  palette: {
    mode: "light",
    // text: {
    //   primary: "#000",
    //   disabled: "#b8b8b8",
    //   secondary: grey[200],
    // },
    background: {
      default: "#F2F2F2",
      paper: "#fff",
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
