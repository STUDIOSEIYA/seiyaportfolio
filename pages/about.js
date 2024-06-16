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

      
      </div>
    </AboutPageWrapper>
  );
}
