import type { FC } from "react";
import BurgerButton from "./BurgerButton";
import HeaderTitle from "./HeaderTitle";
import { HeaderStyle } from "./styles";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <HeaderStyle>
      <HeaderTitle />
      <BurgerButton
        onClick={() => {
          console.log("clicked");
        }}
      />
    </HeaderStyle>
  );
};
export default Header;
