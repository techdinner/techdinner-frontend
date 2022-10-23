import { Box, Grid, Menu, MenuItem, Typography } from "@mui/material";
import type { FC } from "react";
import { useNotify } from "../../../context/notifyContext";
import * as Icons from "@mui/icons-material";
import Link from "next/link";
interface INotifyMenu {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  close: () => void;
}

const NotifyMenu: FC<INotifyMenu> = ({ isOpen, anchorEl, close }) => {
  const { notifications } = useNotify();

  if (!notifications.length) return <></>;
  return (
    <Menu open={isOpen} anchorEl={anchorEl} onClose={close}>
      {notifications.map((n) => {
        const iconName: {
          warning: "Warning";
          error: "Error";
          ok: "CheckRounded";
          info: "Info";
        } = {
          warning: "Warning",
          error: "Error",
          ok: "CheckRounded",
          info: "Info",
        };
        const Icon = Icons[iconName[n.type]];
        return (
          <Link key={n.id} href={n.route ?? "#"}>
            <MenuItem divider sx={{}}>
              <Grid container sx={{ p: 0 }} width={1}>
                <Grid
                  item
                  xs={1}
                  sx={{ placeItems: "center" }}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon />
                </Grid>
                <Grid item xs={11}>
                  <Typography variant="body2" sx={{ fontSize: 8 }}>
                    {Math.ceil(
                      (new Date().getTime() - n.date.getTime()) / 1000
                    )}
                    {" min"}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontSize: 20 }}>
                    {n.title}
                  </Typography>
                  <Typography noWrap sx={{ fontSize: 12 }}>
                    {n.description}
                  </Typography>
                </Grid>
              </Grid>
            </MenuItem>
          </Link>
        );
      })}
    </Menu>
  );
};
export default NotifyMenu;
