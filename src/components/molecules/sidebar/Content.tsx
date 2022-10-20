import { FC } from "react";
import { Box, Divider, useTheme } from "@mui/material";

import { useSidebar } from "../../../context/organisms/sidebarContext";

import Menu from "./Menu";
import Logout from "./Logout";
import Top from "./Top";
import sidebarItems from "../../../infra/data/sidebarItems";

const SidebarContent: FC = () => {
  const { open, setOpen } = useSidebar();
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: 1,
        bgcolor: theme.palette.background.paper,
        borderRadius: 3,
        paddingX: 0.5,
        width: 1,
        // justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        boxShadow: 3,
      }}
    >
      <Top />
      <Divider />
      <Menu items={sidebarItems} />
      <Divider />
      <Logout />
    </Box>
  );
};
export default SidebarContent;
