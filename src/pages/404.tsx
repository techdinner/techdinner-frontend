import Link from "next/link";
import type { FC } from "react";
import { FourZeroFourStyle } from "../../styles/pages/404";
import { GoAlert } from "react-icons/go";

interface FourZeroFourProps {}

const FourZeroFour: FC<FourZeroFourProps> = ({}) => {
  return (
    <FourZeroFourStyle>
      <GoAlert />
      <h1>Página não encontrada!</h1>
      <Link href={"/"} passHref>
        <a>Voltar {"<<"}</a>
      </Link>
    </FourZeroFourStyle>
  );
};
export default FourZeroFour;
