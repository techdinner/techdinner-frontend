import type { NextPage } from "next";
import Head from "next/head";
import { HomeContainer } from "./styles";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Techdinner - Home</title>
        <meta name="description" content="Techdinner - Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContainer>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          sapiente ducimus impedit vel repellendus? Nisi hic, ex, quibusdam
          aliquam, nesciunt dolores aperiam dolore saepe cumque odit quos
          temporibus doloremque illo!
        </p>
      </HomeContainer>
    </>
  );
};

export default Home;
