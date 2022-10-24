import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
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
      componentsProps={{ typography: { variant: "subtitle2", fontSize: 11 } }}
      control={
        <Switch
          size="small"
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
