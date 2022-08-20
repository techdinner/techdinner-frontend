import type { NextPage } from 'next'
import Head from 'next/head'
import Container from './styles'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Techdinner - Home</title>
        <meta name="description" content="Techdinner - Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1>Hello World</h1>
      </Container>
    </>
  )
}

export default Home
