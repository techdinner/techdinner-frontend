import type { NextPage } from "next";
import Head from "next/head";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import Page from "../components/templates/Page";

const Home: NextPage = () => {
  const { palette } = useTheme();
  return (
    <Page title="Pedidos">
      <Typography variant="h1">Home</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius sapiente
        ducimus impedit vel repellendus? Nisi hic, ex, quibusdam aliquam,
        nesciunt dolores aperiam dolore saepe cumque odit quos temporibus
        doloremque illo!
      </Typography>
    </Page>
  );
};

export default Home;
