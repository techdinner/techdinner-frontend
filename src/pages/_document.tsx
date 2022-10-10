import Document, { Html, Head, Main, NextScript } from "next/document";
// import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    // const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    // try {
    // ctx.renderPage = () =>
    //   originalRenderPage({
    //     enhanceApp: (App: any) => (props: any) =>
    //       sheet.collectStyles(<App {...props} />),
    //   });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {/* {sheet.getStyleElement()} */}
        </>
      ),
    };
    // } finally {
    // sheet.seal();
    // }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@1,500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
