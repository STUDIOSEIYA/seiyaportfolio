
import {
    Project3DLuxuryPageWrapper

  } from "../../styles/Project3DLuxuryStyles";
  import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
  import { useRouter } from "next/router";
  import { useStateContext } from "../../lib/context";
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

            <h2>The PowerPuff x Rhinoshield</h2>

            <h3>PROJECTS: <span>CLIENTS</span></h3>
            <h3>SERVICES: <span>GRAPHIC/MOTION DESIGN, PRODUCT DESIGN, MARKETING</span></h3>
            <p>The collaboration project between The PowerPuff and RhinoShield, designed by Travert Thomas, creates durable smartphone cases with colorful designs inspired by the PowerPuff Girls. These accessories are both functional and visually appealing to fans.
</p>

           
            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/graphicdesign/powerpuff_rhino/2_ppf_fullwidth.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>


            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/graphicdesign/powerpuff_rhino/3_ppf _fullwidth.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/graphicdesign/powerpuff_rhino/4_ppf _fullwidth.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <iframe width="1920" height="1080" src="https://www.youtube.com/embed/zBN579TjTe0?rel=0&autoplay=1&mute=1" frameborder="0" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen></iframe>


           
          
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

  