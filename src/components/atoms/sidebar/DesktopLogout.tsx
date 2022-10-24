import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import type { FC } from "react";
import { Logout } from "@mui/icons-material";

const DesktopLogout: FC<{ click: () => void }> = ({ click }) => {
  return (
    <Tooltip title="Sair" placement="right">
      <IconButton
        href="/login"
        aria-label="Sair"
        size="small"
        onClick={click}
        sx={{
          display: { xs: "none", md: "inline-flex" },
          boxShadow: 5,
          border: 1,
          flex: 0,
          color: "primary.main",
        }}
      >
        <Logout fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};
export default DesktopLogout;
