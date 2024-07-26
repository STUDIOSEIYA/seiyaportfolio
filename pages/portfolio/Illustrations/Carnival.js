
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

            <h2>VENICE CARNAVAL</h2>

            <h3>PROJECTS: <span>PERSONAL</span></h3>
            <h3>SERVICES: <span>ART DIRECTION, GRAPHIC DESIGN, ILLUSTRATION</span></h3>
            <p>This is a fictional project, I created posters for the Venice carnival.</p>

            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/illustrations/venicecarnaval/Venice_PART_1.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/illustrations/venicecarnaval/Venice_PART_2.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/illustrations/venicecarnaval/Venice_PART_3.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/illustrations/venicecarnaval/Venice_PART_4.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/illustrations/venicecarnaval/Venice_PART_5.png" // Replace with your image URL
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

  