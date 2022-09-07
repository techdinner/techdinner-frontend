import { FC, ReactElement, useState } from "react";
import { ISidebarItem } from "../../../types/SidebarItem";
import { MenuButtonStyle } from "./styles";
import Link from "next/link";
import SubMenu from "../SubMenu";
interface MenuButtonProps {
  item: ISidebarItem;
}

const MenuButton: FC<MenuButtonProps> = ({ item }) => {
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
  return (
    <>
      <Link href={item?.route ?? "#"} passHref>
        <MenuButtonStyle
          onMouseEnter={() => setShowSubMenu(true)}
          onMouseLeave={() => setShowSubMenu(false)}
        >
          {item.icon}
          <SubMenu item={item} show={showSubMenu} />
        </MenuButtonStyle>
      </Link>
    </>
  );
};
export default MenuButton;
