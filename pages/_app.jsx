import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { Helmet } from 'react-helmet';

function MyApp({ Component, pageProps:{session,...pageProps} }) {
  // ...
  return (
    <>
      <SessionProvider session={session}>
        <Helmet>
          <meta name="google-site-verification" content="google758691b40a024825"/>
        </Helmet>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;