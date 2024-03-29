import React from "react";
import { ISidebarItem } from "../../../types/SidebarItem";
import SubMenuButton from "../SubMenuButton";
import { SubMenuStyle } from "./styles";

interface ISubMenu {
  item: ISidebarItem;
  show: boolean;
}

const SubMenu: React.FC<ISubMenu> = ({ item, show }) => {
  const allItems = [item, ...(item.subItems ?? [])];
  return (
    <SubMenuStyle show={show}>
      {allItems.map((i) => (
        <SubMenuButton key={i.name} item={i} isTitle={i.name === item.name} />
      ))}
    </SubMenuStyle>
  );
};

export default SubMenu;
