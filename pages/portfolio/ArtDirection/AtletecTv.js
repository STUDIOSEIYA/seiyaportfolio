import {
    Project3DLuxuryPageWrapper
} from "../../../styles/Project3DLuxuryStyles";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import { useStateContext } from "../../../lib/context";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { RiFolderDownloadFill, RiShareBoxFill } from 'react-icons/ri';

import { useEffect, useState } from "react";
import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast';
import ReactPlayer from 'react-player/lazy';

export default function ProjectName() {
    return (
        <Project3DLuxuryPageWrapper>
            <div className="projectInfoArea">
                <h2>Atletec TV - Rebranding</h2>
                <h3>PROJECTS: <span>CLIENTS</span></h3>
                <h3>SERVICES: <span>ART DIRECTION, GRAPHIC DESIGN, MOTION DESIGN 2D/3D</span></h3>
                <p>The idea was to make an artistic direction, for their WEBTV thoughtful, in relation to the poles of emissions: culture, entertainment, lets play, sport.</p>
                <p>ATLETEC is a professional esport structure placing human values at the heart of its activities in order to create a healthy environment promoting performance and fulfillment. ➡️ The ESPORTS Pole is composed of professional players aiming for excellence as well as amateur players to accompany and train.</p>
            </div>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/artdirection/atletectv/PART_1.gif"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/artdirection/atletectv/PART_2.png"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/artdirection/atletectv/PART_3.png"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <div className="fullwidthImg">
                <video className="responsive-video" autoPlay loop muted>
                    <source src="../../assets/img/portfolio/artdirection/atletectv/PART_4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/artdirection/atletectv/PART_5.png"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/artdirection/atletectv/PART_6.png"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/artdirection/atletectv/PART_7.gif"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <div className="fullwidthImg">
                <video className="responsive-video" autoPlay loop muted>
                    <source src="../../assets/img/portfolio/artdirection/atletectv/PART_8.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>


            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/artdirection/atletectv/PART_9.gif"
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
