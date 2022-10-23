import { AppBar, Box, Drawer, Grid, Toolbar } from "@mui/material";
import { FC, ReactElement, useEffect, useState } from "react";
import Header from "../organisms/Header";
import MobileSidebar from "../organisms/MobileSidebar";
import DesktopSidebar from "../organisms/DesktopSidebar";
import { useSidebar } from "../../context/organisms/sidebarContext";

interface LayoutProps {
  children?: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { width: sidebarWidth } = useSidebar();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <Box
      height={"100vh"}
      component={"div"}
      className="fodase"
      // sx={{ display: "flex", flexDirection: "column", spacing: 0, gap: 0 }}
    >
      <DesktopSidebar />
      <MobileSidebar />
      <Box display="flex" height={1} flexDirection={"column"}>
        <Header />
        {/* <Toolbar /> */}
        {/* <Toolbar /> */}
        {children}
      </Box>
    </Box>
    // <Grid
    //   container
    //   height={"100vh"}
    //   // component={"div"}
    //   // className="fodase"
    //   // sx={{ display: "flex", flexDirection: "column", spacing: 0, gap: 0 }}
    // >
    //   <Grid item xs={0.1}>
    //     <DesktopSidebar />
    //     <MobileSidebar />
    //   </Grid>
    //   <Grid item xs>
    //     <Grid container spacing={0}>
    //       <Grid item xs={12}>
    //         <Header />
    //       </Grid>
    //       <Grid item xs>
    //         {children}
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Grid>
  );
};

export default Layout;
