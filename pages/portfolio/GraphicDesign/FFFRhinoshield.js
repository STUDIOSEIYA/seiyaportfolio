
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

            <h2>F.F.F x Rhinoshield</h2>

            <h3>PROJECTS: <span>CLIENTS</span></h3>
            <h3>SERVICES: <span>GRAPHIC DESIGN, ILLUSTRATIONS, PRODUCT DESIGN, MARKETING DESIGN</span></h3>
            <p>The collaboration between Rhinoshield and the French national football team, designed by Thomas Travert, combines robust protection and best design for football fans. 
</p>

           
            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/graphicdesign/psg_rhino/PSG1_FullWitdh.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>


            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/graphicdesign/fff_rhino/IMAGES_1.png"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/graphicdesign/fff_rhino/IMAGES_2.png"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/graphicdesign/fff_rhino/IMAGES_3.png"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/graphicdesign/fff_rhino/IMAGES_4.png"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/graphicdesign/fff_rhino/IMAGES_5.png"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/graphicdesign/fff_rhino/IMAGES_6.png"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/graphicdesign/fff_rhino/IMAGES_7.png"
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

  