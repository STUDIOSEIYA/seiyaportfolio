import styled from "styled-components";
//Animation
const { motion } = require("framer-motion");

export const Project3DLuxuryPageWrapper = styled(motion.div)`
  position: relative;
  top:0;
  min-height: 90vh;
  width: 100%;
  background: #2B142B;
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items:center;
  color: #EFCBDB;
  text-align:center;

  .projectInfoArea{

    width:96%;
    min-height:25vh;

    padding:3% 0 0 0;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
  }

  .projectInfoArea h2 {
    font-size:1.8rem !important;
  }

  .projectInfoArea h3 {
    font-size:1.3rem !important;
  }

  .projectInfoArea h3 span {
    font-style:italic;
    font-weight:200;
  }

  .projectInfoArea p {
    text-align:left;
    font-size:0.9rem;
  }

  .video-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 aspect ratio for video */
  }
  
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .fullwidthImg {
    margin: 1% 0;
    width: 100%;
    overflow: hidden; /* Ensure the image does not overflow the container */
  }
  
  .responsive-image {
    width: 100%; /* Set width to 100% */
    height: auto; /* Allow height to adjust proportionally */
  }

  .twoImgFullWidth {
    margin: 0% 0 1% 0;
    width: 100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:Center;
  }

  .twoImgFullWidth img:first-child {
    /* Styles for the first image */
    margin-right:1%;
  }

  .bottomProjectPage {
    margin: 5%;
    width:100%;
  }

  .bottomProjectPage .buttons {
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
  }

  .bottomProjectPage .buttons button{
    margin: 2% 5%;
    padding: 0.5rem 1.5rem;
    border-radius:8px;
    border: solid 1px #EFCBDB;
    background:#EFCBDB;
    font-size:0.9rem;
  }

  .socialmedia {
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
  }

  .socialmedia p {
    margin: 15px 5px;
  }

  .contactArea a {
    color:#EFCBDB;
    text-decoration:none;
  }


`;