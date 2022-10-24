import Box from "@mui/material/Box";
import type { FC } from "react";
import DesktopLogout from "../../atoms/sidebar/DesktopLogout";
import MobileLogout from "../../atoms/sidebar/MobileLogout";

interface LogoutProps {}

const Logout: FC<LogoutProps> = ({}) => {
  return (
    <Box
      sx={{
        width: { xs: "min(30%, 400px)", md: 1 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingY: 1,
        paddingX: 0,
        flexShrink: 1,
      }}
    >
      <MobileLogout click={() => {}} />
      <DesktopLogout click={() => {}} />
    </Box>
  );
};
export default Logout;
