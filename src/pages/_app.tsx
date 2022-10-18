import { CacheProvider, EmotionCache } from "@emotion/react";

import "../infra/fonts";
import createEmotionCache from "../infra/createEmotionCache";

import Head from "next/head";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

import Layout from "../components/templates/Layout";
import { Contexts } from "../context";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const router = useRouter();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Contexts>
        {["/login"].includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </Contexts>
    </CacheProvider>
  );
}
