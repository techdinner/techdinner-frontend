import { FC, useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { NotificationsRounded } from "@mui/icons-material";
import NotifyMenu from "../../molecules/header/NotifyMenu";
import { _MouseEventA, _MouseEventButton } from "../../../infra/types/events";

interface notifyButtonProps {}

const NotifyButton: FC<notifyButtonProps> = ({}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const closeMenu = () => {
    setAnchorEl(null);
  };
  const openMenu = (e: _MouseEventButton) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <>
      <Badge overlap="circular" color="warning" badgeContent="4">
        <IconButton component="button" onClick={openMenu}>
          <NotificationsRounded color="primary" />
        </IconButton>
      </Badge>
      <NotifyMenu close={closeMenu} anchorEl={anchorEl} isOpen={isMenuOpen} />
    </>
  );
};
export default NotifyButton;
