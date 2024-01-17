import '../styles/globals.css';
// import type { AppProps } from 'next/app';
import {SessionProvider} from 'next-auth/react';
import Head from "next/head";

function MyApp({ Component, pageProps:{session,...pageProps} }) {
  return (
    
  <SessionProvider session={session}>
    <Head>
     <meta name="google-site-verification" content="google758691b40a024825.html" />
    </Head>
      <Component {...pageProps} />
  </SessionProvider>
  );
}


export default MyApp
