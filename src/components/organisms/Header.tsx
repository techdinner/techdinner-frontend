import {
  AppBar,
  Badge,
  Box,
  ButtonGroup,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { Menu, NotificationsRounded, Help } from "@mui/icons-material";
import type { Dispatch, FC, SetStateAction } from "react";
import { useSidebar } from "../../context/organisms/sidebarContext";
import { useRouter } from "next/router";
import routeTitle from "../../infra/data/routeTitle";
import { NotifyProvider } from "../../context/notifyContext";
import NotifyButton from "../atoms/header/NotifyButton";
// import routeTitle from "../../data/routeTitle";

const Header: FC = () => {
  const { setOpen: setSidebarOpen, width: sidebarWidth } = useSidebar();
  const router = useRouter();
  const theme = useTheme();
  return (
    <NotifyProvider>
      <AppBar
        position="relative"
        sx={{
          // height: 90,
          bgcolor: "transparent",
          padding: 0.2,
          backgroundImage: "unset",
          boxShadow: "none",
          overflow: "visible",
          m: 0,
          ml: { xs: 0, md: `${sidebarWidth}px` },
          width: { xs: 1, md: `calc(100% - ${sidebarWidth}px)` },
        }}
      >
        <Toolbar
          sx={{
            bgcolor: theme.palette.background.paper,
            boxShadow: 1,
            borderRadius: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // height: "10px",
          }}
        >
          <Typography
            variant="subtitle2"
            // color="primary"
            sx={{ fontSize: { xs: 20, md: 20 }, fontWeight: "bold" }}
          >
            {routeTitle.find((x) => x.route === router.pathname)?.name ??
              "Techdinner"}
          </Typography>
          <IconButton
            sx={{ display: { xs: "inline-flex", md: "none" } }}
            size="large"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu />
          </IconButton>
          <ButtonGroup
            size="large"
            color="primary"
            sx={{
              display: {
                xs: "none",
                md: "inline-flex",
                gap: 15,
              },
            }}
          >
            <NotifyButton />
            <IconButton onClick={() => {}}>
              <Help color="primary" />
            </IconButton>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </NotifyProvider>
  );
};
export default Header;
