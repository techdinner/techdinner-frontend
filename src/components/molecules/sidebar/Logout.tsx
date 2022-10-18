import { Box } from "@mui/material";
import type { FC } from "react";
import DesktopLogout from "../../atoms/sidebar/DesktopLogout";
import MobileLogout from "../../atoms/sidebar/MobileLogout";

interface LogoutProps {}

const Logout: FC<LogoutProps> = ({}) => {
  return (
    <Box
      sx={{
        width: { xs: "min(50%, 400px)", md: 1 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingY: 2,
        paddingX: 0,
      }}
    >
      <MobileLogout click={() => {}} />
      <DesktopLogout click={() => {}} />
    </Box>
  );
};
export default Logout;
