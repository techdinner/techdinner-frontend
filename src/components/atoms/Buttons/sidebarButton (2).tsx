import { FC } from "react";
import { Button, IconButton } from "@mui/material";
import { ISidebarButton } from "../../../../trash/components/types/components/atoms/ISidebarButton";
import {} from "@mui/icons-material";

export const sidebarItem: FC<ISidebarButton> = ({ children, ...props }) => {
  return (
    <IconButton color="primary" sx={{ display: "flex" }} {...props} href="">
      <p>{children}</p>
    </IconButton>
  );
};
