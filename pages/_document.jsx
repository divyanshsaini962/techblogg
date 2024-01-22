import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
  let GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
 
  return (
    <Html>

      <Head>
      <meta name="google-site-verification" content="google758691b40a024825.html" />
      <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
          />

           {/* GTM Code Starts */} 
           <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GTM_ID}', {
                page_path: window.location.pathname,
              });
            `,
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
      </body>
    </Html>
  );
}
