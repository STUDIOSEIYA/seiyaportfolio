
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

            <h2>REYES CLOTHING</h2>

            <h3>PROJECTS: <span>INTERNSHIP</span></h3>
            <h3>SERVICES: <span>ART DIRECTION, GRAPHIC DESIGN, ILLUSTRATION</span></h3>
            <p>Reyes Clothing is a French brand, I did my internship for 1 month and I created posters around Japanese culture for the trip to Tokyo for the shooting of the Tokyo range.</p>

            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/illustrations/reyes/1_header.jpg" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="twoImgFullWidth">

            <img
                        src="../../assets/img/portfolio/illustrations/reyes/2_Half.jpg" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />

            <img
                                    src="../../assets/img/portfolio/illustrations/reyes/3Half.jpg" // Replace with your image URL
                                    alt="Example Image"
                                    className="responsive-image"
                                />

            </div>

            <div className="twoImgFullWidth">

            <img
                        src="../../assets/img/portfolio/illustrations/reyes/4_Half.jpg" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />

            <img
                                    src="../../assets/img/portfolio/illustrations/reyes/6_Half.jpg" // Replace with your image URL
                                    alt="Example Image"
                                    className="responsive-image"
                                />

            </div>

            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/illustrations/reyes/7full.jpg" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />
            </div>

            <div className="twoImgFullWidth">

<img
            src="../../assets/img/portfolio/illustrations/reyes/8half.jpg" // Replace with your image URL
            alt="Example Image"
            className="responsive-image"
        />

<img
                        src="../../assets/img/portfolio/illustrations/reyes/9half.jpg" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />

</div>

<div className="twoImgFullWidth">

<img
            src="../../assets/img/portfolio/illustrations/reyes/10Half.jpg" // Replace with your image URL
            alt="Example Image"
            className="responsive-image"
        />

<img
                        src="../../assets/img/portfolio/illustrations/reyes/11Half.jpg" // Replace with your image URL
                        alt="Example Image"
                        className="responsive-image"
                    />

</div>

<div className="twoImgFullWidth">

<img
            src="../../assets/img/portfolio/illustrations/reyes/12Half.jpg" // Replace with your image URL
            alt="Example Image"
            className="responsive-image"
        />



</div>


            <div className="fullwidthImg">
                <img
                        src="../../assets/img/portfolio/illustrations/reyes/13full.jpg" // Replace with your image URL
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

  