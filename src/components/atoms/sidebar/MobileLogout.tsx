import { Button } from "@mui/material";
import type { FC } from "react";
import { Logout } from "@mui/icons-material";

const MobileLogout: FC<{ click: () => void }> = ({ click }) => {
  return (
    <Button
      variant="outlined"
      onClick={click}
      sx={{
        display: { xs: "inline-flex", md: "none" },
        width: 1,
        paddingX: 0,
      }}
      aria-label="Sair"
      startIcon={<Logout />}
    >
      Sair
    </Button>
  );
};
export default MobileLogout;
