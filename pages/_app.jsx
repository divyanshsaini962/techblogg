import '../styles/globals.css';
// import type { AppProps } from 'next/app';
import {SessionProvider} from 'next-auth/react';
import Head from "next/head";

function MyApp({ Component, pageProps:{session,...pageProps} }) {
  let GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  return (
    
  <SessionProvider session={session}>
    <Head>
     <meta name="google-site-verification" content="google758691b40a024825.html" />
    </Head>
      <Component {...pageProps} />
      <noscript>
  <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" ></iframe>
   </noscript>
  </SessionProvider>
  
  );
}


export default MyApp
