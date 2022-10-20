import { FC, MouseEvent, useEffect, useState } from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu as MuiMenu,
  MenuItem,
  Tooltip,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import * as Icons from "@mui/icons-material";
import { ISidebarItem } from "../../../infra/types/SidebarItem";
import { useRouter } from "next/router";
import MyMenu from "../../molecules/sidebar/Menu";
import Link from "next/link";

const Item: FC<{ item: ISidebarItem }> = ({ item }) => {
  const Icon = Icons[item.icon ?? "LabelRounded"];
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip
        title={
          <Typography color="white" fontSize={20}>
            {item.name}
          </Typography>
        }
        placement="right"
      >
        <ListItemButton
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          href={item.route}
          onClick={handleClick}
          component="a"
          alignItems="center"
          disableGutters
          key={item.route}
          sx={{
            bgcolor:
              router.pathname === item.route ? "primary.main" : "transparent",
            width: 1,
            flex: 0,
            height: { xs: "60px", md: "40px" },
            paddingX: { xs: 2, md: 0 },
            boxShadow: 2,
            borderRadius: 2,
            gap: 2,
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              width: { xs: "auto", md: 1 },
              height: "50px",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              m: 0,
              p: 0,
              minWidth: 0,
              "&:hover *": { color: "black" },
            }}
          >
            <Icon
              color={router.pathname === item.route ? "secondary" : "primary"}
              sx={{ fontSize: { xs: 40, md: 25 } }}
            />
          </ListItemIcon>

          <ListItemText
            sx={{
              display: {
                xs: "inline-flex",
                md: "none",
              },
              flexGrow: 0,
            }}
            primary={
              <Typography
                variant="subtitle2"
                color={
                  router.pathname === item.route ? "secondary" : "typography"
                }
                sx={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </Typography>
            }
          />
        </ListItemButton>
      </Tooltip>
      {item.subItems?.length && (
        <MuiMenu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {item.subItems.map((sub) => (
            <MenuItem key={sub.route} onClick={handleClose}>
              {router.asPath !== sub.route ? (
                <Link href={sub.route ?? "#"} passHref>
                  <MuiLink color="secondary" underline={"hover"}>
                    {sub.name}
                  </MuiLink>
                </Link>
              ) : (
                <Typography color="primary">{sub.name}</Typography>
              )}
            </MenuItem>
          ))}
        </MuiMenu>
      )}
    </>
  );
};
export default Item;
