import type { FC } from "react";
import { ISidebarItem } from "../../../techdinner-frontend/src/types/SidebarItem";
import { SidebarStyle } from "./Sidebar/styles";
import IconContainer from "./Sidebar";
import Menu from "../molecules/SidebarButtonsList";
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
