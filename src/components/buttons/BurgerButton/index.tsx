import type { FC } from "react";
import { FaBars } from "react-icons/fa";
import { BurgerButtonStyle } from "./styles";

interface BurgerButtonProps {}

const BurgerButton: FC<BurgerButtonProps> = ({}) => {
  return (
    <BurgerButtonStyle>
      <FaBars />
    </BurgerButtonStyle>
  );
};
export default BurgerButton;
