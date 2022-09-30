import type { FC } from "react";
import { FaBars } from "react-icons/fa";
import { BurgerButtonStyle } from "./styles";

interface BurgerButtonProps {
  onClick: () => void;
}

const BurgerButton: FC<BurgerButtonProps> = ({ onClick }) => {
  return (
    <BurgerButtonStyle onClick={onClick}>
      <FaBars />
    </BurgerButtonStyle>
  );
};
export default BurgerButton;
