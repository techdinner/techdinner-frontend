import { Dispatch, FC, SetStateAction, SyntheticEvent, useState } from "react";
// import IconContainer from "./Sidebar";
// import Menu from "../molecules/SidebarButtonsList";
import {
  Box,
  Drawer,
  SwipeableDrawer,
  Typography,
  useTheme,
} from "@mui/material";
import { useSidebar } from "../../context/organisms/sidebarContext";
import Content from "../molecules/sidebar/Content";

const Sidebar: FC = () => {
  const { open, setOpen, width } = useSidebar();
  const theme = useTheme();
  return (
    <Drawer
      variant="permanent"
      anchor={"left"}
      sx={{
        display: { xs: "none", md: "block" },
        position: "relative",
      }}
      open={open}
      onClose={setOpen}
      ModalProps={{
        keepMounted: true,
      }}
      PaperProps={{
        sx: {
          border: "none",
          width,
          bgcolor: theme.palette.background.default,
          padding: 0.5,
        },
      }}
    >
      <Content />
    </Drawer>
  );
};
export default Sidebar;
