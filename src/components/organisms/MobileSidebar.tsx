import { Dispatch, FC, SetStateAction, SyntheticEvent, useState } from "react";
// import IconContainer from "./Sidebar";
// import Menu from "../molecules/SidebarButtonsList";
import { Box, Drawer, SwipeableDrawer, useTheme } from "@mui/material";
import { useSidebar } from "../../context/organisms/sidebarContext";
import Content from "../molecules/sidebar/Content";

const MobileSidebar: FC = () => {
  const { open, setOpen, width } = useSidebar();
  const theme = useTheme();
  return (
    <SwipeableDrawer
      variant="temporary"
      anchor="top"
      sx={{ display: { xs: "block", md: "none" } }}
      open={open}
      onClose={() => setOpen(false)}
      ModalProps={{
        keepMounted: true,
      }}
      onOpen={function (event: SyntheticEvent<{}, Event>): void {
        setOpen(true);
      }}
      swipeAreaWidth={0}
      PaperProps={{
        sx: { width: 1, height: 1, bgcolor: theme.palette.background.default },
      }}
    >
      <Content />
    </SwipeableDrawer>
  );
};
export default MobileSidebar;
