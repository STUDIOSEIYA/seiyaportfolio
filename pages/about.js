import Head from 'next/head';
import Link from "next/link";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { useStateContext } from "../lib/context";
import Image from 'next/image';

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

        <div className="text-right">
        <h1>About me</h1>
        <p>I'm Thomas Travert, Graphic / Motion Designer 2D-3D & Illustrator based in Tokyo </p>
        <h1>Awards</h1>
        <div className="awards-twocol">

          <div className="awards-left">
            <h2>ADOBE x SONY ANIMATIONS</h2>
            <p>Contest Spider Man into the spiderverse</p>
          </div>
          <div className="awards-right">
            <h2>TOP 25 WORLDLINE MARSHMELLO</h2>
            <p>Content Adobe x MARSHMELLO</p>
          </div>


        </div>
        <h1>References</h1>
        <div className="awards-twocol">

          <div className="awards-left">
        
            <p> <span>Adobe Design</span> / Daft Punk 2070 Remastered</p>
            <p> <span>Adobe Creative Cloud Live</span> / Portfolio Review</p>
            <p> <span>Adobe France</span> / Daft Punk 2070</p>
            <p> <span>Adobe France</span> / Coca Cola  #CokexAdobexYou</p>
          </div>
          <div className="awards-right">
          
          <p> <span>Wacom</span> / Artwork of #CIntiq22HD</p>
            <p> <span>Adobe France</span> / Black and White Illustrations</p>
            <p> <span>XP Pen France</span> / Ambassadeur France</p>
            <p> <span>Insydium XParticles</span> / Motion Design</p>
          </div>


        </div>
        </div>

      
      </div>
      <div className="logos-clients">
        <h1>Worked with</h1>
        <div class="img-logos">
        <img src="../../assets/img/about/1_rhinoshield.png" alt="Rhinoshield" class="responsive-image" />
        <img src="../../assets/img/about/25_xppen.png" alt="XP Pen" class="responsive-image" />
        <img src="../../assets/img/about/2_Adobe.png" alt="Adobe" class="responsive-image" />
        <img src="../../assets/img/about/24_Xbox-Logo.wine.png" alt="Xbox" class="responsive-image" />
        <img src="../../assets/img/about/atelierbnp.png" alt="Atelier BNP" class="responsive-image" />
        <img src="../../assets/img/about/15_Marvel.png" alt="Marvel" class="responsive-image" />
        <img src="../../assets/img/about/14_lucasfilm.png" alt="Lucas Firm" class="responsive-image" />
        <img src="../../assets/img/about/9_Disney.png" alt="Disney" class="responsive-image" />
        <img src="../../assets/img/about/11_hbo.png" alt="HBO" class="responsive-image" />
        <img src="../../assets/img/about/23_Warner_Bros.png" alt="Warner Bros" class="responsive-image" />
        <img src="../../assets/img/about/6_cn.png" alt="CN" class="responsive-image" />
        <img src="../../assets/img/about/7_Crunchyroll-Logo.wine.png" alt="Crunchy Roll" class="responsive-image" />
        <img src="../../assets/img/about/10_Funimation.png" alt="Funimation" class="responsive-image" />
        <img src="../../assets/img/about/21_toeianimation.png" alt="TOEI Animation" class="responsive-image" />
        <img src="../../assets/img/about/3_animeltd.png" alt="Anime Ltd" class="responsive-image" />
        <img src="../../assets/img/about/8_Disney Paris 1.png" alt="Disneyland Paris" class="responsive-image" />

        <img src="../../assets/img/about/22_ufc.png" alt="UFC" class="responsive-image" />
        <img src="../../assets/img/about/17_2401_A_ALPINE-BLACK-CMYK.png" alt="Alpine" class="responsive-image" />
        <img src="../../assets/img/about/19_SIGNE_D_COQ_FRANCE_RVB.png" alt="FFF" class="responsive-image" />
        <img src="../../assets/img/about/16_psg.png" alt="PSG" class="responsive-image" />
        <img src="../../assets/img/about/18_schalke.png" alt="Schalke" class="responsive-image" />
        <img src="../../assets/img/about/4_ASM.png" alt="AS Monaco" class="responsive-image" />
        <img src="../../assets/img/about/20_sorare logo 1.png" alt="Sorare" class="responsive-image" />
        <img src="../../assets/img/about/12_LEDGER-WORDMARK-BLACK-RGB.png" alt="Ledger" class="responsive-image" />
        <img src="../../assets/img/about/5_Cloud9_logo.png" alt="Cloud 9" class="responsive-image" />
        <img src="../../assets/img/about/13_Logo.png" alt="Example Image" class="responsive-image" />

        
       
        
        
        
        
        
        
        
        
        
        
        
        
       
    </div>
      </div>
    </AboutPageWrapper>
  );
}
