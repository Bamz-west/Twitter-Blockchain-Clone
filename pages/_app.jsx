import '../styles/globals.css';
import '../lib/hexStyles.css';
import Head from 'next/head';
import { TwitterProvider } from "../context/TwitterContext";

function MyApp({ Component, pageProps }) {
  return (
    <TwitterProvider>
      <Head>
        <title>Twitter-blockchain-clone</title>
        <meta name="description" content="Twitter blockchain clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </TwitterProvider>
  );
}

export default MyApp;