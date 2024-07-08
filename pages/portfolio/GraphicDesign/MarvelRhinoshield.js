
import {
    Project3DLuxuryPageWrapper

  } from "../../../styles/Project3DLuxuryStyles";
  import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
  import { useRouter } from "next/router";
  import { useStateContext } from "../../../lib/context";
  import {AiFillHeart, AiOutlineHeart}  from 'react-icons/ai';
  import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
  import Tooltip from 'react-bootstrap/Tooltip';
  import {RiFolderDownloadFill,RiShareBoxFill}  from 'react-icons/ri';

  
  import { useEffect, useState } from "react";
  import Image from "next/image";
  import toast, { Toaster } from 'react-hot-toast';
  import ReactPlayer from 'react-player/lazy'

  export default function ProjectName() {



  
    return (
      <Project3DLuxuryPageWrapper>


            <div className="projectInfoArea">

            <h2>Marvel x Rhinoshield</h2>

            <h3>PROJECTS: <span>CLIENTS</span></h3>
            <h3>SERVICES: <span>GRAPHIC/MOTION DESIGN, PRODUCT DESIGN, MARKETING</span></h3>
            <p>Rhinoshield collaborates with Marvel for an exclusive collection of device protections designed by artist Thomas Travert, featuring iconic superheroes 
like Spider-Man, Iron Man, Captain America  and more.</p>

           
            </div>

            <iframe width="1920" height="1080" src="https://www.youtube.com/embed/7EeAw54moVM?autoplay=1&mute=1&loop=1&playlist=7EeAw54moVM" frameborder="0" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen></iframe>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/graphicdesign/marvel_rhino/2_Marvel _fullwidth.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>


            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/graphicdesign/marvel_rhino/3_ppf 3_FULLWITDH.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/graphicdesign/marvel_rhino/4_FULLWITDH.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/graphicdesign/marvel_rhino/5_FULLWITDH.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            




           
          
            <div className="bottomProjectPage">

                <div className="buttons">

                    <button>LAST PROJECT</button>
                    <button>NEXT PROJECT</button>

                </div>

                <div className="socialmedia">
                    <p>icon</p>
                    <p>icon</p>
                    <p>icon</p>
                    <p>icon</p>
                </div>

                <div className="contactArea">
                    <a href="#">contactseiyafx@gmail.com</a>
                </div>

            </div>

     

           
   

      
        </Project3DLuxuryPageWrapper>
      
 
    );
  }

  