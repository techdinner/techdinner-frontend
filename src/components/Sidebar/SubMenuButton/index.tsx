import type { FC } from "react";
import Link from "next/link";
import { SubMenuButtonStyle } from "./styles";
import { ISidebarItem } from "../../../types/SidebarItem";

interface SubMenuButtonProps {
  isTitle: boolean;
  item: ISidebarItem;
}

const SubMenuButton: FC<SubMenuButtonProps> = ({ isTitle, item }) => {
  return (
    <>
      <Link href={item.route ?? "#"} passHref>
        <SubMenuButtonStyle isTitle={isTitle}>
          {isTitle ? <b>{item.name}</b> : <span>{item.name}</span>}
        </SubMenuButtonStyle>
      </Link>
    </>
  );
};
export default SubMenuButton;
