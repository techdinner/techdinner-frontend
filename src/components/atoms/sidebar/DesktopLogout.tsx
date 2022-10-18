import { IconButton, Tooltip } from "@mui/material";
import type { FC } from "react";
import { Logout } from "@mui/icons-material";

const DesktopLogout: FC<{ click: () => void }> = ({ click }) => {
  return (
    <Tooltip title="Sair" placement="right">
      <IconButton
        aria-label="Sair"
        size="medium"
        onClick={click}
        sx={{
          display: { xs: "none", md: "inline-flex" },
          boxShadow: 5,
          border: 1,
          flex: 0,
          color: "primary.main",
        }}
      >
        <Logout />
      </IconButton>
    </Tooltip>
  );
};
export default DesktopLogout;
