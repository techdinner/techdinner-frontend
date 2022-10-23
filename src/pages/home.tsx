import type { NextPage } from "next";
import Head from "next/head";
import { Box, Card, Grid, Paper, Typography, useTheme } from "@mui/material";
import Page from "../components/templates/Page";
import { useHome } from "../context/pages/homeContext";
import Image from "next/image";
import NoOrderSelected from "../assets/NoOrderSelected.svg";
import { Container } from "@mui/system";
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
          <Paper></Paper>
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
          {currentOrder ? (
            <Card></Card>
          ) : (
            <Container
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                height={500}
                alt="No order selected image"
                src={NoOrderSelected}
              />
            </Container>
          )}
        </Grid>
      </Grid>
    </Page>
  );
};

export default Home;
