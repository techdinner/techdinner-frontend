import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { dark, light } from "../infra/theme";
import { parseCookies, setCookie } from "nookies";

interface IMuiContext {
  currentTheme: "light" | "dark";
  setCurrentTheme: Dispatch<SetStateAction<"light" | "dark">>;
}

interface IMuiProvider {
  children: ReactNode;
}

const MuiContext = createContext<IMuiContext>({} as IMuiContext);

export const MuiProvider: FC<IMuiProvider> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">(
    getStoredTheme()
  );

  function getStoredTheme(): "light" | "dark" {
    const cookies = parseCookies(null);
    const themeInCookies = cookies.theme;
    return themeInCookies === "light" ? "light" : "dark";
  }

  useEffect(() => {
    currentTheme !== getStoredTheme() && setStoredTheme(currentTheme);

    function setStoredTheme(newTheme: "light" | "dark") {
      setCookie(null, "theme", currentTheme);
      console.log("theme changed to " + newTheme);
    }
  }, [currentTheme]);
  //
  return (
    <MuiContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={currentTheme === "light" ? light : dark}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </MuiContext.Provider>
  );
};

export const useMui = () => {
  return useContext(MuiContext);
};
