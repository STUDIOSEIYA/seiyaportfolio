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

  .about-home{
    min-height:90vh;
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
    width:50%;
  }

  .about-home .text-right{
    height:92vh;

    position:relative;
    flex:1;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    width:50%;
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

  .text-right h1 {
  
    font-size:30px;
    margin:1% 0  2% 0;
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

  

  .right-text {
    min-height: 90vh;
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
   
  }

  .right-text h1 {
    line-height:calc(.8vw + .5vh + 0.8vmin) !important;
}

  .right-text .title-area h2 {
    line-height:calc(1.2vw + 1.3vh + 0.8vmin);
    font-size:calc(1vw + 1vh + 0.5vmin);
    padding: 0!important;
  }
  
  .right-text p {
    width: 80%;
    margin-bottom: 3vh;
    line-height:calc(.8vw + 1.0vh + 0.5vmin);
    font-size:calc(.5vw + 0.7vh + 0.5vmin);
    letter-spacing:.3px;
  }

  .right-text .awwards p {
    line-height:calc(.8vw + 1.0vh + 0.5vmin);
    font-size:calc(.5vw + 0.7vh + 0.5vmin);
    margin: 0 !important;
  }


  .right-text h2 {
    margin: 0 0 0px 15px !important;
    padding: 0!important;
    /* font-family: "Monument-Bold";*/
  }

  .right-text .awwards-part p {
    text-align:center !important;
    line-height:calc(.6vw + 1.0vh + 0.5vmin);
    font-size:calc(.6vw + 0.5vh + 0.5vmin);
  }

  .right-text .awwards-part p span {
    font-weight:800 !important;
  }

  .right-text .references p {
    line-height:calc(.6vw + 1.0vh + 0.5vmin);
    font-size:calc(.4vw + 0.5vh + 0.5vmin);
    margin: 0 0 0 7vw !important;
  }

  .about-home .right-text p.biography{
    width:80%;
    margin-bottom:2vh;
  }

  .awards-left p  {
    margin-bottom: 0.5rem !important;
  }

   .awards-right p  {
    margin-bottom: 0.5rem !important;
  }

  .awards-left p span {
    font-weight:bold
   
  }

    .awards-right p span {
    font-weight:bold
  }



  .about-home .awwards-part p{
    width:100%;
    padding: .3vh 0 !important;
    text-align:left;
    margin: 0 2vh !important;
  }

  .about-home .references-part a{
    width:100%;
    padding: 2px 0 !important;
    text-align:left;
    text-decoration:none;
    color: #EFCBDB;
    line-height:calc(.6vw + 1.0vh + 0.5vmin);
    font-size:calc(.6vw + 0.5vh + 0.5vmin);
    margin: 0 0 0.5vh 0;
  }

  .references-part a span {
    font-weight:800;
    margin: 0 !important;

  }


  .title-area {
    position:relative;
    height:6vh;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin-bottom:1vh !important;
    /* margin-left:-3vw; */
  }


  .title-area img {
    height:1.6rem;
    width:auto;
  }

  .awwards {
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    text-align:center;
    margin:0vh 0 2vh 0;
    width:70%;
  }

  .awwards-part{
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    text-align:center;
    margin: 0 !important;
    padding: 0 !important;
    height:auto;
  }

  
  .references {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-start;
    text-align:center;
    margin:0vh 0 0 5vw;
    width:80%;
    
  }

  

  .references-part{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding: 1vw 0 0 2vw !important;
   
  }

   .img-logos {
            padding-top: 5vh;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 5px; /* Adjust gap between images as needed */
            justify-items: space-around;
            align-items: space-around;
             margin: 2%;
        }
        .img-logos img {
            max-width: 100%;
            height: auto;
        }

  

  img.clientslogo{
    position:relative;
    width:70%;
    height:auto;
   
  }

  @media screen and (max-width: 768px) {
    .about-home {
      flex-direction: column !important; /* Change to column layout on mobile */
      text-align: center;
    }

    .right-text .title-area h2 {
      line-height:calc(1.5vw + 1.3vh + 2.8vmin);
      font-size:calc(1.2vw + 1vh + 2.5vmin);
      padding: 0!important;
    }

    .references {

      width:89%;
      margin-bottom:2vh;
    }

    img.clientslogo{
      position:relative;
      width:95%;
      height:auto;
     
    }

    .references-part{
      
      padding: 0 0 0 1vw !important;
  
    }

    .about-home .references-part a{
      width:100%;
      padding: 2px 0 !important;
    
      line-height:calc(.6vw + 1.0vh + 1.9vmin);
      font-size:calc(.6vw + 0.5vh + 1.7vmin);
   
    }

    .right-text p {
      width: 80%;
      margin-bottom: 3vh;
      line-height:calc(.8vw + 1.0vh + 2vmin);
      font-size:calc(.5vw + 0.7vh + 1.8vmin);
      letter-spacing:.3px;
    }

    .right-text .awwards-part p {
      text-align:center !important;
      line-height:calc(.6vw + 1.0vh + 1.9vmin)!important;
      font-size:calc(.4vw + 0.5vh + 1.6vmin) !important;
    }

  

    .awwards {
      display:flex;
      flex-direction:row;
      justify-content:space-between !important;
      align-items:center;
      text-align:center;
      width:90%;
    }
  

    .about-home .left-img img{
      width:90vw;
      height:auto;
      margin:3vh 0 !important;
    }
  
    .left-img {
      order: 2; /* Reposition .left-img to appear below .right-text */
    }
  
    .right-text {
      order: 1; /* Reposition .right-text to appear above .left-img */
      text-align: center;
    }
  
    .right-text p {
      width: 90%; /* Adjust text width as needed */
    }
  }


`;