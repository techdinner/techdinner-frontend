import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import GlobalStyle from '../../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <GlobalStyle />
    </Layout>
  )
}

export default MyApp
