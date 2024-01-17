import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
      <meta name="google-site-verification" content="google758691b40a024825.html" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${process.env.GA_TRACKING_ID}');
          `,
            }}
          />
          {/* google anylist code end */}
        
      </Head>
      <body>
        <Main />
        <NextScript />
        
      </body>
    </Html>
  );
}
