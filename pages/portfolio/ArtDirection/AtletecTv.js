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

            <iframe
                src="https://player.vimeo.com/video/812305416?h=3339ce9860&badge=0&autopause=0&player_id=0&app_id=58479"
                width="1920"
                height="1080"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="DA presentation Atletec TV"
            ></iframe>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/artdirection/atletectv/1Full.png"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/artdirection/atletectv/2Full.png"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/artdirection/atletectv/3Full.png"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <iframe
                src="https://player.vimeo.com/video/811858080?h=7f1c9da047&badge=0&autopause=0&player_id=0&app_id=58479"
                width="1920"
                height="1080"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="DA presentation Atletec TV"
            ></iframe>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/artdirection/atletectv/4Full.png"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/artdirection/atletectv/5Full.png"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/artdirection/atletectv/6Full.gif"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/artdirection/atletectv/7Full.png"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/artdirection/atletectv/9Full.gif"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/artdirection/atletectv/10Full.gif"
                    alt="Example Image"
                    className="responsive-image"
                />
            </div>

            <div className="fullwidthImg">
                <img
                    src="../../assets/img/portfolio/artdirection/atletectv/11Full.gif"
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
