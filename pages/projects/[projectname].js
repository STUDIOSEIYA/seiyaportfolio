
  import {
    ProjectPageWrapper

  } from "../../styles/ProjectDetailsStyles";
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
  
  export default function ProjectName() {

    const router = useRouter()
    const projectname = router.query.projectname


  
    return (
      <ProjectPageWrapper>



        <div className="customModalBody">

            <p>{projectname}</p>
   
         </div>
      
        </ProjectPageWrapper>
      
 
    );
  }

  