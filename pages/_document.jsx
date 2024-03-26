import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';



export default function Document() {
  let GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
 
  return (
    <Html>

      <Head>
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

           {/* open graph tag */}
          <meta property="og:title" content="Tech Blog Service - Honest Unbiased Tech Product Reviews" />
          <meta property="og:description" content="Tech Blog Service provides detailed, honest, and unbiased reviews of 
           the latest tech products in India and globally. We deeply research and test phones, laptops, TVs, audio devices,
           smart home devices and more to provide comprehensive analysis and comparisons. Read our in-depth tech product 
           reviews and determine the best gadgets in various price ranges and categories before buying. Follow Tech Blog 
           Service to stay updated on new product launches and make smart purchasing decisions that get you the most 
           value" />
          <meta property="og:type" content="Blog Website"/>
          <meta property="og:url" content="https://www.techblogservice.online/" />
          <meta property="og:image" content="/smallLogo.jpg" />  
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
