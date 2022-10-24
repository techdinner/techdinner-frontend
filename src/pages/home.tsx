import type { NextPage } from "next";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

import Add from "@mui/icons-material/Add";

import Page from "../components/templates/Page";
import { HomeProvider, useHome } from "../context/pages/homeContext";

import NoOrderSelected from "../components/organisms/home/NoOrderSelected";
import OrderProvider from "../context/pages/orderContext";
import OrdersList from "../components/organisms/home/OrdersList";

const HomeWrapper: NextPage = () => {
  return (
    <HomeProvider>
      <Home />
    </HomeProvider>
  );
};

const Home: NextPage = () => {
  const { palette } = useTheme();
  const { currentOrder } = useHome();
  return (
    <Page title="Pedidos">
      <Grid
        position="relative"
        flex={1}
        bgcolor={"background.default"}
        container
        // item
        p={1}
        gap={1}
        // width={1}
        sx={{ flex: 1 }}
      >
        <Grid
          item
          xs={12}
          md={2.5}
          sx={{
            minWidth: 320,
            borderRadius: 5,
            boxShadow: 3,
            bgcolor: "background.paper",
            height: 1,
          }}
        >
          <OrdersList />
        </Grid>
        <Grid
          item
          xs
          sx={{
            borderRadius: 5,
            boxShadow: 3,
            bgcolor: "background.paper",
            height: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {currentOrder ? <OrderProvider /> : <NoOrderSelected />}
        </Grid>
      </Grid>
    </Page>
  );
};

export default HomeWrapper;
