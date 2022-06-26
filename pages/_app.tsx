import { createTheme, ThemeProvider } from "@mui/material";
import { Layout } from "@/components/layouts/Layout";
import React from "react";
import type { AppProps } from "next/app";

const theme = createTheme({});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
