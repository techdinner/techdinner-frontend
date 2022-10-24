import { FC } from "react";
import { ISidebarItem } from "../../../infra/types/SidebarItem";
import MuiMenu from "@mui/material/Menu";
import SubMenuItem from "../../atoms/header/SubMenuItem";
import { useSidebarItem } from "../../atoms/sidebar/Item";

interface SubMenuProps {
  item: ISidebarItem;
}

const SubMenu: FC<SubMenuProps> = ({ item }) => {
  const { isSubMenuOpen, closeSubMenu, anchorEl } = useSidebarItem();

  if (!item?.subItems?.length) return <></>;
  return (
    <MuiMenu
      id="basic-menu"
      anchorEl={anchorEl}
      open={isSubMenuOpen}
      onClose={closeSubMenu}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      {item.subItems.map((sub) => (
        <SubMenuItem key={item.route} item={sub} />
      ))}
    </MuiMenu>
  );
};
export default SubMenu;
