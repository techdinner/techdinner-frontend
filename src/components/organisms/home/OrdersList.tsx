import {
  Button,
  FormControl,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import type { FC } from "react";
import { useHome } from "../../../context/pages/homeContext";
import Add from "@mui/icons-material/Add";
import Flatware from "@mui/icons-material/Flatware";
import InputIcon from "@mui/icons-material/Input";
import DeliveryDining from "@mui/icons-material/DeliveryDining";
import Archive from "@mui/icons-material/Archive";
// import  from "@mui/icons-material/"
// import  from "@mui/icons-material/"
// import  from "@mui/icons-material/"
// import  from "@mui/icons-material/"
// import  from "@mui/icons-material/"
// import  from "@mui/icons-material/"
import { LockClock } from "@mui/icons-material";
("@mui/icons-material/");

const OrdersList: FC = () => {
  const { filter, setFilter } = useHome();

  return (
    <Container disableGutters sx={{ display: "flex", flexDirection: "column" }}>
      <Button
        size="large"
        sx={{ m: 3, display: { xs: "none", md: "inline-flex" } }}
        startIcon={<Add />}
        variant="contained"
        color="primary"
      >
        Novo Pedido
      </Button>
      <FormControl
        sx={{ marginInline: 3, display: { xs: "none", md: "inline-flex" } }}
      >
        <InputLabel id="order-filter-label">Filtro</InputLabel>
        <Select
          labelId="order-filter-label"
          id="order-filter"
          value={filter}
          label="Filtro"
          onChange={(e) => {
            setFilter(e.target.value as string);
          }}
        >
          <MenuItem value={"all"}>
            <Typography fontWeight={600}>Todos</Typography>
          </MenuItem>
          <MenuItem value={"type:consume"}>
            <Typography color="error.main">Consumo</Typography>
          </MenuItem>
          <MenuItem value={"type:withdraw"}>
            <Typography color="warning.main">Retirada</Typography>
          </MenuItem>
          <MenuItem value={"type:delivery"}>
            <Typography color="primary.main">Entrega</Typography>
          </MenuItem>
          <MenuItem value={"status:archived"}>🗃️ Arquivados</MenuItem>
          <MenuItem value={"status:confirming"}>🔐 Confirmando...</MenuItem>
          <MenuItem value={"status:started"}>✍️ Iniciado</MenuItem>
          <MenuItem value={"status:notconfirmed"}>🚫 Não confirmado</MenuItem>
          <MenuItem value={"status:scheduled"}>📅 Agendado</MenuItem>
          <MenuItem value={"status:inqueue"}>😴 Na Fila</MenuItem>
          <MenuItem value={"status:preparing"}>⌛ Preparando...</MenuItem>
          <MenuItem value={"status:done"}>🆗 Feito!</MenuItem>
          <MenuItem value={"status:delivering"}>🛵 Entregando...</MenuItem>
          <MenuItem value={"status:delivered"}>🏠 Entregue!</MenuItem>
          <MenuItem value={"status:onthetable"}>🍴 Na mesa</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
};
export default OrdersList;
