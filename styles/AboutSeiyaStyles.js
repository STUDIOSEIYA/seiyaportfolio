import styled from "styled-components";
//Animation
const { motion } = require("framer-motion");

export const AboutPageWrapper = styled(motion.div)`
  position: relative;
  top:0;
  min-height: 90vh;
  width: 100%;
  background: #2B142B;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  color: #EFCBDB;
  text-align:center;


  .portfolio-home{
    height:90vh;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    background: #2B142B;
    background-size:  center;
    background-position:  center center;
    background-repeat:  repeat;
    position: relative; 
    z-index:1;
    overflow:hidden;
    padding: 2% 0;

    
  }



  

  .about-home .left-img{
    position:relative;
    flex:1;
    background:transparent;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
  }

  .about-home .left-img img{
    position:relative;
    height:85vh;
    width:auto;
    padding: 2%;
    transform: rotate(0deg);
  }

  .about-home .center-text {
    height:85vh;
    width:100px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:flex-start;
    padding: 2% 0 0 1%;
  }

  .about-home .social-media {
    width:auto;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
  }

  .social-media img {
    min-width:1.5rem !important;
    height:auto;
    padding: 6%;
  }

  

  .about-home .right-text{
    height:85vh;
    flex:2;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    text-align:center;

  }

  .title-area {
    position:relative;
    height:5vh;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin-bottom:1vh !important;
    margin-left:-30px;
  }

 

  .title-area img {
    height:1.6rem;
    width:auto;
  }

  .title-area h2 {
    margin: 0 0 0px 15px !important;
    padding: 0!important;
    font-size:1.8rem;
   /* font-family: "Monument-Bold"; */

  }

  h2 {
    margin: 0 0 0px 15px !important;
    padding: 0!important;
    font-size:1.6rem;
    /* font-family: "Monument-Bold";*/

  }


  .awwards {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    text-align:center;
    margin-bottom:20px;

    width:60%;
  }

  .awwards p {
    font-size:0.9rem;
    margin: 0 !important;
  }

  .awwards-part{
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    text-align:center;
    margin: 0 !important;
    padding: 0 !important;
    height:8vh;
  }

  .awwards-part p {
    text-align:center !important;
  }

  .awwards-part p span {
    font-weight:800 !important;
  }

  .references {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    text-align:center;
    margin-bottom:20px;
 
    width:70%;
  }

  .references p {
    font-size:0.9rem;
    margin: 0 !important;
  }

  .references-part{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin: 0 !important;
    padding: 0 !important;
  }

  .about-home .right-text p.biography{
    width:80%;
    margin-bottom:3vh;
  }

  .about-home .right-text p{
    width:100%;
    margin-bottom:3vh;
  }

  .about-home .awwards-part p{
    width:100%;
    padding: 2px 0 !important;
    text-align:left;
    margin: 0 18px !important;
  }

  .about-home .references-part a{
    width:100%;
    padding: 2px 0 !important;
    text-align:left;
    margin: 0 18px !important;
    text-decoration:none;
    color: #EFCBDB;
  }

  .references-part a span {
    font-weight:800;
    margin: 0 !important;
  }

  img.clientslogo{
    position:relative;
    width:35vw;
    height:auto;
    margin-top:-10px;
  }

  .email-address a {
    margin: 0 !important;
    cursor:pointer;
  }
  
`;