import type { NextPage } from "next";
import Head from "next/head";
import { HomeContainer } from "../../../styles/pages/Home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Techdinner - Home</title>
        <meta name="description" content="Techdinner - Home" />
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
