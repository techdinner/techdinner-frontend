import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { createContext, useContext, useState, FC } from "react";
import { _MouseEventA } from "../../../infra/types/events";
import * as Icons from "@mui/icons-material";
import { ISidebarItem } from "../../../infra/types/SidebarItem";
import { useRouter } from "next/router";
import SubMenu from "../../molecules/sidebar/SubMenu";

interface ISidebarItemProvider {
  item: ISidebarItem;
}

interface ISidebarItemContext {
  isSubMenuOpen: boolean;
  openSubMenu: (e: _MouseEventA) => void;
  closeSubMenu: () => void;
  item: ISidebarItem;
  anchorEl: null | HTMLElement;
}

const SidebarItemContext = createContext<ISidebarItemContext>(
  {} as ISidebarItemContext
);

const Item: FC<ISidebarItemProvider> = ({ item }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isSubMenuOpen = Boolean(anchorEl);

  const closeSubMenu = () => {
    setAnchorEl(null);
  };
  const openSubMenu = (e: _MouseEventA) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <SidebarItemContext.Provider
      value={{ openSubMenu, closeSubMenu, isSubMenuOpen, item, anchorEl }}
    >
      <ItemComponent />
    </SidebarItemContext.Provider>
  );
};

export default Item;

export const useSidebarItem = () => {
  return useContext(SidebarItemContext);
};

const ItemComponent: FC = () => {
  const { item, isSubMenuOpen, openSubMenu } = useSidebarItem();

  const Icon = Icons[item.icon ?? "LabelRounded"];
  const router = useRouter();

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
          aria-controls={isSubMenuOpen ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={isSubMenuOpen ? "true" : undefined}
          href={item.route}
          onClick={openSubMenu}
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
      <SubMenu item={item} />
    </>
  );
};
