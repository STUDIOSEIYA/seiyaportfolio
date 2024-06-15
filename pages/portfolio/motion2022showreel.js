
import {
    ProjectMotionPageWrapper

  } from "../../styles/ProjectMotionStyles";
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
      <ProjectMotionPageWrapper>


      

          
            <div className="videoWrapper">
          <video
          src="/assets/video/2022showreel.mp4"
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "92%",
            objectFit: "cover",
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 0
          }}
        ></video>

<div className="bottomProjectPage">




</div>
          </div>
   

     

           
   

      
        </ProjectMotionPageWrapper>
      
 
    );
  }

  