import type { FC } from "react";
import { HeaderStyle } from "./styles";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <HeaderStyle>
      <h3>TechDinner - Sistema de pedidos</h3>
    </HeaderStyle>
  );
};
export default Header;
