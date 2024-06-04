
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

            <h2>ATLETEC ZWIFT RACING LEAGUE ROSTER</h2>

            <h3>PROJECTS: <span>CLIENTS</span></h3>
            <h3>SERVICES: <span>ART DIRECTION, GRAPHIC DESIGN, MOTION DESIGN</span></h3>
            <p>The objective was to make an artistic direction shifted of what is already made, with the colors but also to play with the forms of the elements of this sport. Created with Quentin Vincent <br/><br/>
            ATLETEC is a professional esport structure placing human values at the heart of its activities in order to create a healthy environment promoting performance and fulfillment. ➡️ The ESPORTS Pole is composed of professional players aiming for excellence as well as amateur players to accompany and train. <br/><br/>
            What is Zwift Racing League (ZRL) It's well-organized bike racing on an unprecedented scale, with eight weeks of team-based points competition held across multiple timezones catering to thousands of teams.
</p>


            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/artdirection/atletec/1_half.gif" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="twoImgFullWidth">

            <img
                        src="../../assets/img/portfolio/artdirection/atletec/1_Halfwith.jpg" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />

            <img
                                    src="../../assets/img/portfolio/artdirection/atletec/2_half..gif" // Replace with your image URL
                                    alt="Example Image"
                                    className="responsive-image"
                                />

            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/artdirection/nike/2full.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/artdirection/nike/3full.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/artdirection/nike/4full.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/artdirection/nike/5full.gif" // Replace with your image URL
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

  