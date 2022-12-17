import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>App title</title>
        <link key={1} rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
