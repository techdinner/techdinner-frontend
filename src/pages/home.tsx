import type { NextPage } from "next";
import Head from "next/head";
import { Paper } from "@mui/material";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Techdinner - Home</title>
        <meta name="description" content="Techdinner - Home" />
      </Head>

      <Paper>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          sapiente ducimus impedit vel repellendus? Nisi hic, ex, quibusdam
          aliquam, nesciunt dolores aperiam dolore saepe cumque odit quos
          temporibus doloremque illo!
        </p>
      </Paper>
    </>
  );
};

export default Home;
