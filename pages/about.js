import Head from 'next/head';
import Link from "next/link";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { useStateContext } from "../lib/context";

import {
  AboutPageWrapper
} from "../styles/AboutStyles";

import ThreeDModel from './SeiyaPerso'; // Adjust the import path as necessary

export default function About() {
  return (
    <AboutPageWrapper>
      <div className="about-home">
        <div className="left-img">
        <ThreeDModel />
        
        </div>

        <div className="right-text">
          <div className="title-area">
            <img src={"/assets/img/about.svg"} alt="Icon About" />  
            <h2>About me</h2>
          </div>
          <p className="biography">
            Captivated by the image, the audiovisual but also the drawing since I discovered graphic design at the age of 15.
            Handling the Adobe suite in a self-taught manner allowed me to increase my technique but also my autonomy.
            I am able to adapt to teamwork. I have helped and worked with companies all over the world.
          </p>

          <div className="title-area">
            <img src={"/assets/img/stars.svg"} alt="Icon Awards" />  
            <h2>Awards</h2>
          </div>
          <div className="awards">
            <div className="awards-part">
              <p><span>BIG WINNER</span></p>
              <p><span>ADOBE X SONY ANIMATIONS</span></p>
              <p>CONTEST SPIDERMAN IN THE SPIDERVERSE</p>
            </div>
            <div className="awards-part">
              <p><span>TOP 25 WORDLINE MARSHMELLO CONTEST</span></p>
              <p><span>CONTEST ADOBE X MARSHMELLO</span></p>
            </div>
          </div>

          <div className="title-area">
            <img src={"/assets/img/stars.svg"} alt="Icon Awards" />  
            <h2>References</h2>
          </div>
          <div className="references">
            <div className="references-part">
              <a href="https://twitter.com/AdobeDesign/status/1398140736919453696" target="_blank">
                <span>Adobe Design /</span> Daft Punk 2070 Remastered
              </a>
              <a href="https://www.youtube.com/watch?v=g2lz_oVpgK8&t=3654s" target="_blank">
                <span>Adobe Creative Cloud Live /</span> Portfolio Review
              </a>
              <a href="https://twitter.com/AdobeFrance/status/1131273828003401729" target="_blank">
                <span>Adobe France /</span> Daft Punk 2070
              </a>
              <a href="https://www.youtube.com/watch?v=xixEel-itVA" target="_blank">
                <span>Adobe Creative Cloud Live /</span> Portfolio Review
              </a>
              <a href="https://twitter.com/AdobeFrance/status/925062053391351808" target="_blank">
                <span>Adobe France /</span> Coca Cola #CokexAdobexYou
              </a>
            </div>
            <div className="references-part">
              <a href="https://twitter.com/AdobeFrance/status/925062053391351808" target="_blank">
                <span>Adobe France /</span> Coca Cola #CokexAdobexYou
              </a>
              <a href="https://twitter.com/wacom/status/953318939660029952" target="_blank">
                <span>Wacom /</span> Artwork of #Cintiq22HD
              </a>
              <a href="https://twitter.com/AdobeFrance/status/1092798796084494336" target="_blank">
                <span>Adobe France /</span> Black and White Illustrations
              </a>
              <a href="https://twitter.com/XPPentablette/status/1482299141430681602" target="_blank">
                <span>XP Pen France /</span> Portfolio Review
              </a>
              <a href="https://www.instagram.com/p/CcLn0EvsMiW/?igshid=YmMyMTA2M2Y%3D" target="_blank">
                <span>Insydium XParticles /</span> Coca Cola #CokexAdobexYou
              </a>
            </div>
          </div>
        </div>
      </div>
    </AboutPageWrapper>
  );
}
