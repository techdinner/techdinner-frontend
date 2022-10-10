import { FC, ReactElement, useState } from "react";
import { ISidebarItem } from "../../../../techdinner-frontend/src/types/SidebarItem";
import { MenuButtonStyle } from "../../organisms/Sidebar/MenuButton/styles";
import Link from "next/link";
import SubMenu from "../../molecules/Sidebar/SubButtonsList";
import ConditionalLink from "../../../atoms/ConditionalLink";
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
