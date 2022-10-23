import { FormControlLabel, Switch } from "@mui/material";
import type { FC } from "react";
import { useMui } from "../../context/muiContext";

interface ThemeSwitcherProps {
  showLabel?: boolean;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ showLabel = false }) => {
  const { currentTheme, setCurrentTheme } = useMui();
  return (
    <FormControlLabel
      labelPlacement={showLabel ? "end" : "bottom"}
      componentsProps={{ typography: { variant: "subtitle2" } }}
      control={
        <Switch
          checked={currentTheme === "light" ? true : false}
          onChange={(e) => setCurrentTheme(e.target.checked ? "light" : "dark")}
        />
      }
      label={
        (showLabel ? "Tema: " : "") +
        (currentTheme === "light" ? "Claro" : "Escuro")
      }
    />
  );
};
export default ThemeSwitcher;
