import '../styles/globals.css';
import Layout from '../components/Layout';
import { StateContext } from "../lib/context";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const titlePage = "Thomas Travert Motion / Graphic designer 3D 2D Illustrator"; // Define your titlePage variable

  return (
    <StateContext>
      <Layout>
        <Head>
          <title>{titlePage}</title>
          <meta name="description" content="Thomas Travert Motion / Graphic designer 3D 2D Illustrator" />
          <meta property="twitter:title" content="Thomas Travert Motion / Graphic designer 3D 2D Illustrator" />
          <meta property="twitter:description" content="Thomas Travert Motion / Graphic designer 3D 2D Illustrator" />
          <meta property="og:description" content="Thomas Travert Motion / Graphic designer 3D 2D Illustrator" />
          <meta property="og:title" content="Seiya Portfolio Website" />
          <meta property="og:url" content="https://thomastravert.com/" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.png" />
          <meta property="og:image" content="https://thomastravert.com/logo.png" />
          <meta property="twitter:image" content="https://thomastravert.com/logo.png" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
