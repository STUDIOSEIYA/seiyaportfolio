import styled from "styled-components";
// Animation
const { motion } = require("framer-motion");

export const HomePageWrapper = styled(motion.div)`


.showcase video
{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}

.home-area {
  width:100vw;
  height:100vh;
  position:fixed;
  object-fit: cover;
}

.home-area .home-text {
  order: 1; /* This will make it appear at the top on mobile */
  width: 100%; /* Full width on mobile */
  padding: 5%;
  
}

  .home-text {
    order: 1; /* This will make it appear at the top on mobile */
    width: 100%; /* Full width on mobile */
    padding: 5%;
  }

  .menu {
    order: 2; /* This will make it appear below on mobile */
  }

  .home-text h1 {
    font-weight: 100 !important;
  }

  .home-text h1 span {
    font-weight: 600;
    color: #FCDEEA;
  }

  .home-text > div span {
    font-weight: 600;
    color: #FCDEEA;
  }

  .home-text h1 span:nth-last-child(1) {
    font-style: italic;
  }

  h1 {
    color: #fff;
    font-size: 3rem;
    line-height: 4rem;
  }

  canvas {
    top: 0 !important;
    position: relative;
    z-index: 0 !important;
  }

  @media (min-width: 768px) {
    .home-text {
      order: 0; /* This will make it appear on the left on desktop */
      width: 50%; /* Adjust width as needed */
    }

    .menu {
      order: 1; /* This will make it appear on the right on desktop */
      width:50%;
    }
  }
`;
