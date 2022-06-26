import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import CssBaseline from "@mui/material/CssBaseline";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <title>Pokemon App</title>
          <meta name="author" content="Pancho Cordero" />
          <meta name="description" content="Pokedex con NextJS" />
          <meta name="keywords" content="pokemon, pokedex" />
        </Head>
        <body>
          <CssBaseline />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
