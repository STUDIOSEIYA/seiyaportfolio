
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

            <h2>Atletec Zwift Racing League Roster</h2>

            <h3>PROJECTS: <span>CLIENTS</span></h3>
            <h3>SERVICES: <span>ART DIRECTION, GRAPHIC DESIGN, MOTION DESIGN</span></h3>
            <p>Make an artistic direction shifted of what is already made, with the colors but also to play with the forms of the elements of this sport. Created with Quentin Vincent</p>
            <p>ATLETEC is a professional esport structure placing human values at the heart of its activities in order to create a healthy environment promoting performance and fulfillment. ➡️ The ESPORTS Pole is composed of professional players aiming for excellence as well as amateur players to accompany and train.</p>
            <p>What is Zwift Racing League (ZRL) It's well-organized bike racing on an unprecedented scale, with eight weeks of team-based points competition held across multiple timezones catering to thousands of teams.</p>
            <p>Brief : To make an artistic direction shifted of what is already made, with the colors but also to play with the forms of the elements of this sports.</p>
            </div>

            <iframe src="https://player.vimeo.com/video/610429045?h=ee1ec0c771&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Announcement Zwift Team  Atletec x Otakamfr"></iframe>  

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/ArtDirection/Atletec/Zwift_PART_2.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/ArtDirection/Atletec/Comp1.gif" // Replace with your image URL
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

  