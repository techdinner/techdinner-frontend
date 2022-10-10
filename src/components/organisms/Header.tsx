import type { FC } from "react";
import BurgerButton from "../../../../trash/Header/BurgerButton";
import HeaderTitle from "../../../../trash/components/atoms/Text";
import { HeaderStyle } from "../../../../trash/Header/styles";

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
