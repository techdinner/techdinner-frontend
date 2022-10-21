import type { FC } from "react";
import { Badge, IconButton } from "@mui/material";
import { NotificationsRounded } from "@mui/icons-material";
import NotifyMenu from "../../molecules/header/notifyMenu";

interface notifyButtonProps {}

const notifyButton: FC<notifyButtonProps> = ({}) => {
  return (
    <>
      <Badge overlap="circular" color="warning" badgeContent="4">
        <IconButton onClick={() => {}}>
          <NotificationsRounded color="primary" />
        </IconButton>
      </Badge>
      <NotifyMenu />
    </>
  );
};
export default notifyButton;
