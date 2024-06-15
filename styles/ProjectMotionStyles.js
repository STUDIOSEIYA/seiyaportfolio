import styled from "styled-components";
//Animation
const { motion } = require("framer-motion");

export const ProjectMotionPageWrapper = styled(motion.div)`
  position: relative;
  min-height: 90vh;
  width: 100%;
  background: #2B142B;
  display: flex;
  flex-direction:column !improtant;
  justify-content: center;
  align-items:center;
  color: #EFCBDB;
  text-align:center;


  .bottomProjectPage {
    position:fixed;
    margin: 2%;
    width:100%;
    position:fixed;
    top:87%;
    left:0!important;
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