
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

            <h2>XBOX WIRE</h2>

            <h3>PROJECTS: <span>CLIENTS</span></h3>
            <h3>SERVICES: <span>ART DIRECTION, GRAPHIC DESIGN, MOTION DESIGN</span></h3>
            <p>Xbox France contacted me for create their own program on twitch.</p>

            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/artdirection/xbox/1_Headerfull.jpg" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="twoImgFullWidth">

            <img
                        src="../../assets/img/portfolio/artdirection/xbox/1half.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />

            <img
                                    src="../../assets/img/portfolio/artdirection/xbox/2_1half.png" // Replace with your image URL
                                    alt="Example Image"
                                    className="responsive-image"
                                />

            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/artdirection/xbox/4.jpg" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/artdirection/xbox/6full.jpg" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/artdirection/xbox/8full.jpg" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/artdirection/xbox/9full.jpg" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/artdirection/xbox/10full.jpg" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/artdirection/xbox/11full.jpg" // Replace with your image URL
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

  