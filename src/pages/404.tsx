import Link from "next/link";
import type { FC } from "react";
import { GoAlert } from "react-icons/go";
import { Paper } from "@mui/material";

interface FourZeroFourProps {}

const FourZeroFour: FC<FourZeroFourProps> = ({}) => {
  return (
    <Paper>
      <GoAlert />
      <h1>Página não encontrada!</h1>
      <Link href={"/"} passHref>
        <a>Voltar {"<<"}</a>
      </Link>
    </Paper>
  );
};
export default FourZeroFour;
