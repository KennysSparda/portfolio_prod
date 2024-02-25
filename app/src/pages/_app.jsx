// pages/_app.js
import React from 'react'
import Head from 'next/head'
import { jsxs as _jsxs } from 'react/jsx-runtime';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kenny Portfolio</title>
        <link rel="shortcut icon" href="ico\logo.png"></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
