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
          <Image
            src="/assets/img/project-logos.png" // Adjust the path as necessary
            alt="Client logos"
            layout="responsive"
            width={700}
            height={475}
          />
        </div>
    </AboutPageWrapper>
  );
}
