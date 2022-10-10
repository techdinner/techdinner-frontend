import type { FC } from "react";
import MenuButton from "../../atoms/Sidebar/Button";
import sidebarItems from "../../data/sidebarItems";
import { MenuStyle } from "../organisms/Sidebar/Menu/styles";

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
  return (
    <MenuStyle>
      {sidebarItems.map((item) => (
        <MenuButton key={item.name} item={item} />
      ))}
    </MenuStyle>
  );
};
export default Menu;
