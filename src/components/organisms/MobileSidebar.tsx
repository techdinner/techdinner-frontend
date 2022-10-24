import { FC, SyntheticEvent } from "react";
import { useTheme } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
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
        sx: { width: 1, height: 1, bgcolor: "transparent" },
      }}
    >
      <Content />
    </SwipeableDrawer>
  );
};
export default MobileSidebar;
