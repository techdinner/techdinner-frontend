import type { FC } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
import Image from "next/image";
import NoOrderSelectedImage from "../../../assets/NoOrderSelected.svg";

const NoOrderSelected: FC = () => {
  return (
    <Container
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Image
        height={500}
        alt="No order selected image"
        src={NoOrderSelectedImage}
      />
      <Typography variant="h3">Nenhum pedido selecionado!</Typography>
      <Typography variant="body2" textAlign={"center"}>
        Inicie um novo pedido, ou abra um pedido existente para ver as opções.
      </Typography>
    </Container>
  );
};
export default NoOrderSelected;
