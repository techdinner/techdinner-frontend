import { FC } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";

import Menu from "./Menu";
import Logout from "./Logout";
import Top from "./Top";
import sidebarItems from "../../../infra/data/sidebarItems";
import ThemeSwitcher from "../../atoms/ThemeSwitcher";
import { useSidebar } from "../../../context/organisms/sidebarContext";

const SidebarContent: FC = () => {
  const theme = useTheme();
  const { setOpen } = useSidebar();
  return (
    <Box
      sx={{
        height: 1,
        bgcolor: theme.palette.background.paper,
        borderRadius: 3,
        paddingX: 0.5,
        width: 1,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        boxShadow: 2,
      }}
    >
      <IconButton
        sx={{
          display: { xs: "absolute", md: "none" },
          alignSelf: "flex-end",
          ml: 3,
          mt: 1,
        }}
        onClick={() => setOpen(false)}
      >
        <Close />
      </IconButton>
      <Top />
      <Divider />
      <Menu items={sidebarItems} />
      <Divider />
      <ThemeSwitcher />
      <Divider />
      <Logout />
    </Box>
  );
};
export default SidebarContent;
