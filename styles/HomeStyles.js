import styled from "styled-components";
//Animation
const { motion } = require("framer-motion");

export const HomePageWrapper = styled(motion.div)`

  .home-text{
    position:fixed;
    left:0;
    top:33%;
    width:55%;
    height:auto;
    z-index:999 !important;
    padding: 5%;
  }

  .home-text h1 {
    font-weight:100 !important;
  }

  .home-text h1 span {
    font-weight:600;
    color:#FCDEEA;
  }

  .fade-in {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  
  .fade-in.show {
    opacity: 1;
  }


.home-text > div span
{
  font-weight:600;
  color:#FCDEEA;
}

.home-text h1 span:nth-last-child(1) {
  font-style:italic;
}

  h1{
    color:#fff;
    font-size:55px;
    line-height:75px;
  }
  
  canvas {
    top:50% !important;
    left:50%;
    transform:translate(-50%,-50%);
    position:absolute;
    z-index:0 !important;
    width:100vw;
   
  }

`;

