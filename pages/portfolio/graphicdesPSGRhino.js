
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

            <h2>Paris Saint Germain x Rhinoshield</h2>

            <h3>PROJECTS: <span>CLIENTS</span></h3>
            <h3>SERVICES: <span>GRAPHIC/MOTION DESIGN, ILLUSTRATIONS, PRODUCT DESIGN, MARKETING</span></h3>
            <p>The collaboration between Rhinoshield and Paris Saint Germain, designed by Thomas Travert, creates an exclusive collection of smartphone protection accessories inspired by the football club's visual identity.
</p>

           
            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/graphicdesign/psg_rhino/PSG1_FullWitdh.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>



            <video width="1920" height="1080" controls autoplay loop muted>
            <source src="/assets/video/2_FULL.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>

            <video width="1920" height="1080" controls autoplay loop muted>
            <source src="/assets/video/3_Full.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>




           
          
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

  