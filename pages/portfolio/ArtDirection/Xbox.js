
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
            <p>Xbox Wire est une émission en direct tous les mois  produite par Xbox, c’est une émission ou il y’a des invitées comme Le Joueur du Grenier, Domingo,Kadidiatou Diany, Ina Gilbert.
Cette émission parle de ce qui est autour du jeux vidéo il y’a plusieurs rubriques:Autour du vert, Le Défi, La Xboîte  more info here.  
</p>

            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/artdirection/xbox/part_1.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <iframe
                src="https://player.vimeo.com/video/714793393?h=cb258f529d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                width="1920"
                height="1080"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="DA presentation Atletec TV"
            ></iframe>

<iframe
                src="https://player.vimeo.com/video/714750174?h=dcabdf96ee&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                width="1920"
                height="1080"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="DA presentation Atletec TV"
            ></iframe>

            

     

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/artdirection/xbox/PART_3_1.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/artdirection/xbox/PART_3_2.png" // Replace with your image URL
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

  