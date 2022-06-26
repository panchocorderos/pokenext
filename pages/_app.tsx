import { createTheme, ThemeProvider } from "@mui/material";
import { Layout } from "@/components/layouts/Layout";
import React, { useState } from "react";
import type { AppProps } from "next/app";

const theme = createTheme({});
function MyApp({ Component, pageProps }: AppProps) {
  const [page, setPage] = useState(1);

  const increasePage = () => {
    setPage(page + 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component
          {...pageProps}
          currentPage={page}
          increasePage={increasePage}
        />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
