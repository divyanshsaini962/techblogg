import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps:{session,...pageProps} }) {
  const router = useRouter();
  const canonicalURL = `https://www.techblogservice.online${router.asPath}`;
  return (
    <>
      <SessionProvider session={session}>
        <Head>
        <link rel="canonical" href={canonicalURL} />
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;