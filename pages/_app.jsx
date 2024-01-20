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
     <script 
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`} />

           {/* GTM Code Starts */} 
           <script
             dangerouslySetInnerHTML={{
               __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
               })(window,document,'script','dataLayer','GTM-599T76ZG');`,
             }}
           />
           {/* GTM Code Ends */}
    </Head>
      <Component {...pageProps} />
      <noscript>
    <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" ></iframe>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-599T76ZG"
         height="0" width="0"></iframe>
   </noscript>
  </SessionProvider>
  
  );
}


export default MyApp
