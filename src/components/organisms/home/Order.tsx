import { createContext, FC } from "react";
import { useHome } from "../../../context/pages/homeContext";
import { IOrder } from "../../../infra/types/entities/order";
import Container from "@mui/system/Container";
import Typography from "@mui/material/Typography";

const Order: FC = () => {
  const { currentOrder } = useHome();

  return (
    <Container>
      <Typography variant="h1">id: {currentOrder?.id}</Typography>
    </Container>
  );
};
export default Order;
