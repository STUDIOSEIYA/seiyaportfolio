import Head from 'next/head'
import Link from "next/link"
import { useState,useEffect,useRef } from 'react'
import { useRouter } from "next/router"
import { useStateContext } from "../lib/context"
import Footer from "../components/Footer"
import Spline from '@splinetool/react-spline';
import Lottie from "react-lottie";
import animationIntro from "../assets/animation/intro.json";
import {
  HomePageWrapper

} from "../styles/HomeStyles";

export default function Home() {
  const {titlePage, setTitlePage} = useStateContext();
  const lottieRef = useRef(null);

   useEffect(() => {
    setTitlePage("Seiya Portfolio")
    if (lottieRef.current) {
      lottieRef.current.play();
  
    }
  
  }, []) 

  

  return (
    <div>
      <Head>
        <title>{titlePage}</title>
        <meta name="description" content="Seiya Portfolio Website" />
        <meta property="twitter:title" content="Seiya Portfolio Website"/>
        <meta property="twitter:description" content="Seiya Portfolio Website"/>
        <meta property="og:description" content="Seiya Portfolio Website"/>
        <meta property="og:title" content="Midnight Breeze"/>
        <meta property="og:url" content="https://www.seiyastudio.com/"/>
        <meta property="og:type" content="website"/>
        <link rel="icon" href="/favicon.png" />
        <meta property="og:image" content="https://www.seiyastudio.com/thumbnail.png"/>
        <meta property="twitter:image" content="https://www.seiyastudio.com/thumbnail.png"/>
      </Head>
      <>

     
    <HomePageWrapper>

      <div className="home-text">

      <Lottie
        ref={lottieRef}
        options={{
          animationData: animationIntro,
          loop: false, // Set loop to true if you want the animation to repeat
          autoplay: false, // Set autoplay to true if you want the animation to play automatically
        }}
      />
      </div>
   
      <Spline id="canvasMenu" className="menu" scene="https://prod.spline.design/vtlrm5ctWgUmzQnw/scene.splinecode" />
 
    <Footer /> 

    </HomePageWrapper>

   

    </>

    </div>
  )
}
