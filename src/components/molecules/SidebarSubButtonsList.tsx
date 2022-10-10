import React from "react";
import { ISidebarItem } from "../../../../techdinner-frontend/src/types/SidebarItem";
import SubMenuButton from "./SubButton";
import { SubMenuStyle } from "../../organisms/Sidebar/SubMenu/styles";

interface ISubMenu {
  item: ISidebarItem;
  show: boolean;
}

// show={show}

const SubMenu: React.FC<ISubMenu> = ({ item, show }) => {
  const allItems = [item, ...(item.subItems ?? [])];
  return (
    <SubMenuStyle className={`${show ? "show" : undefined}`}>
      {allItems.map((i) => (
        <SubMenuButton key={i.name} item={i} isTitle={i.name === item.name} />
      ))}
    </SubMenuStyle>
  );
};

export default SubMenu;
