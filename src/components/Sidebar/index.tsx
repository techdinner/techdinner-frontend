import type { FC } from "react";
import { ISidebarItem } from "../../types/SidebarItem";
import { SidebarStyle } from "./styles";
import IconContainer from "./IconContainer";
import Menu from "./Menu";
interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <SidebarStyle>
      <IconContainer />
      <Menu />
    </SidebarStyle>
  );
};
export default Sidebar;
