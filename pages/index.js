import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useStateContext } from "../lib/context"
import Footer from "../components/Footer"
import { HomePageWrapper } from "../styles/HomeStyles";

export default function Home() {
  const { titlePage, setTitlePage } = useStateContext();

  useEffect(() => {
    setTitlePage("Seiya Portfolio")
  }, []);

  return (
    <div>
      <Head>
        <title>{titlePage}</title>
        <meta name="description" content="Seiya Portfolio Website" />
        <meta property="twitter:title" content="Seiya Portfolio Website" />
        <meta property="twitter:description" content="Seiya Portfolio Website" />
        <meta property="og:description" content="Seiya Portfolio Website" />
        <meta property="og:title" content="Seiya Portfolio Website" />
        <meta property="og:url" content="https://www.seiyastudio.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:image" content="https://www.seiyastudio.com/thumbnail.png" />
        <meta property="twitter:image" content="https://www.seiyastudio.com/thumbnail.png" />
      </Head>

      <HomePageWrapper>
        <section className="showcase">
          <div className="videoWrapper">
          <video
          src="/assets/video/showreel.mp4"
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 0
          }}
        ></video>

       
          </div>
        </section>
        <Footer />
      </HomePageWrapper>
    </div>
  )
}
