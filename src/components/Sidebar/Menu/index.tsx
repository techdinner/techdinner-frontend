import type { FC } from "react";
import MenuButton from "../MenuButton";
import sidebarItems from "../../../data/sidebarItems";
import { MenuStyle } from "./styles";

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
