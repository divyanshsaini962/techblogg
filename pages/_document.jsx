import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
  let GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
 
  return (
    <Html>

      <Head>
      <meta name="google-site-verification" content="google758691b40a024825.html" />
      <Script
        src={`https://www.googletagmanager.com/gtm.js?id=GTM-599T76ZG`}
        strategy="afterInteractive"
      />

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
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
          {/* google anylist code end */}
        
      </Head>
      <body>
        <Main />
        <NextScript />
         <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=GTM-599T76ZG`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
      </body>
    </Html>
  );
}
