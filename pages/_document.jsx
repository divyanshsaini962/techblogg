import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <Html>
      <Head>
        {/* Google Tag Manager Script */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
        ></script>
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
        ></script>

        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2874481895307847"
          crossOrigin="anonymous"
        ></script>

        {/* Font Link */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Tech Blog Service - Honest Unbiased Tech Product Reviews" />
        <meta property="og:description" content="Tech Blog Service provides detailed, honest, and unbiased reviews of the latest tech products in India and globally. We deeply research and test phones, laptops, TVs, audio devices, smart home devices and more to provide comprehensive analysis and comparisons. Read our in-depth tech product reviews and determine the best gadgets in various price ranges and categories before buying. Follow Tech Blog Service to stay updated on new product launches and make smart purchasing decisions that get you the most value" />
        <meta property="og:type" content="Blog Website" />
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
