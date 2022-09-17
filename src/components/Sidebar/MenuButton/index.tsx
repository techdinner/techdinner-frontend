import { FC, ReactElement, useState } from "react";
import { ISidebarItem } from "../../../types/SidebarItem";
import { MenuButtonStyle } from "./styles";
import Link from "next/link";
import SubMenu from "../SubMenu";
import ConditionalLink from "../../ConditionalLink";
import { useRouter } from "next/router";
interface MenuButtonProps {
  item: ISidebarItem;
}

const MenuButton: FC<MenuButtonProps> = ({ item }) => {
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
  const router = useRouter();
  return (
    <>
      <ConditionalLink
        href={item?.route ?? ""}
        render={router.route !== item.route}
      >
        <MenuButtonStyle
          onMouseEnter={() => setShowSubMenu(true)}
          onMouseLeave={() => setShowSubMenu(false)}
        >
          {item.icon}
          <SubMenu item={item} show={showSubMenu} />
        </MenuButtonStyle>
      </ConditionalLink>
    </>
  );
};
export default MenuButton;
