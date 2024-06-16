
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

            <h2>Football Posters</h2>

            <h3>PROJECTS: <span>PERSONAL</span></h3>
            <h3>SERVICES: <span>GRAPHIC DESIGN</span></h3>
            <p>Description here</p>
            
           
           
            </div>

            <div className="twoImgFullWidth">

            <img
                        src="../../assets/img/portfolio/graphicdesign/football_designposter/1_Portugal_Halfwith.jpeg" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />

            <img
                                    src="../../assets/img/portfolio/graphicdesign/football_designposter/2_RealMadrid_Halfwith.jpeg" // Replace with your image URL
                                    alt="Example Image"
                                    className="responsive-image"
                                />

            </div>

            <div className="twoImgFullWidth">

            <img
                        src="../../assets/img/portfolio/graphicdesign/football_designposter/3_Al Nassr_Halfwith.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />

            <img
                                    src="../../assets/img/portfolio/graphicdesign/football_designposter/4_Nadeshiko_Halfwith.png" // Replace with your image URL
                                    alt="Example Image"
                                    className="responsive-image"
                                />

            </div>

            <div className="twoImgFullWidth">

            <img
                        src="../../assets/img/portfolio/graphicdesign/football_designposter/5_Mbappe_Halfwith.png" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />

            <img
                                    src="../../assets/img/portfolio/graphicdesign/football_designposter/6_CR7_Halfwith.jpg" // Replace with your image URL
                                    alt="Example Image"
                                    className="responsive-image"
                                />

            </div>

            <div className="twoImgFullWidth">



            <img
                                    src="../../assets/img/portfolio/graphicdesign/football_designposter/7_Umut_Halfwith.jpg" // Replace with your image URL
                                    alt="Example Image"
                                    className="responsive-image"
                                />

<img
                                    src="../../assets/img/portfolio/graphicdesign/football_designposter/8_Haaland_Halfwith.png" // Replace with your image URL
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

  