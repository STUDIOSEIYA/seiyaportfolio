import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useStateContext } from "../lib/context"
import Footer from "../components/Footer"
import { HomePageWrapper } from "../styles/HomeStyles";

export default function page2070() {



  return (
    <div>


      <HomePageWrapper>
        <section className="showcase">
          <div className="videoWrapper">
          <video
          src="/assets/video/2070_CS.mp4"
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
     
      </HomePageWrapper>
    </div>
  )
}
