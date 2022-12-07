import React from "react";

import Head from "next/head";
import Script from "next/script";

import { Navbar } from "./";

export const Layout = function ({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="description" content="Cultura Babilonica" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <>{children}</>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.11.1/baguetteBox.min.js"></Script>
      <Script src="js/script.min.js"></Script>
    </>
  );
};
