import { FC, useEffect, useState } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import * as Icons from "@mui/icons-material";
import { useSidebar } from "../../../context/organisms/sidebarContext";
import sidebarItems from "../../../infra/data/sidebarItems";
import { ISidebarItem } from "../../../infra/types/SidebarItem";
import { useRouter } from "next/router";

const Item: FC<{ item: ISidebarItem }> = ({ item }) => {
  const Icon = Icons[item.icon ?? "LabelRounded"];
  const theme = useTheme();
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname === item.route);
  }, []);

  return (
    <Tooltip
      title={
        <Typography color="white" fontSize={20}>
          {item.name}
        </Typography>
      }
      placement="right"
    >
      <ListItem
        alignItems="center"
        disableGutters
        disablePadding
        key={item.route}
        button={true}
        sx={{
          bgcolor:
            router.pathname === item.route ? "primary.main" : "transparent",
          width: 1,
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
        {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      ></Menu> */}
      </ListItem>
    </Tooltip>
  );
};
export default Item;
