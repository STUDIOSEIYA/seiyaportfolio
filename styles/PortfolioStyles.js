import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PortfolioPageWrapper = styled(motion.div)`
  position: relative;
  top: 0;
  min-height: 90vh;
  width: 100%;
  background: #2B142B;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #EFCBDB;
  text-align: center;
  z-index:9999!improtant;

  .portfolio-home {
    min-height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column; /* Mobile: Stack elements vertically */
    justify-content: center;
    background: #2B142B;
    background-size: center;
    background-position: center center;
    background-repeat: repeat;
    position: relative;
    z-index: 1;

    padding: 6% 0;
  }

  .single-proj p {
    transition: all 0.2s ease-in-out;
    margin-bottom: 0 !important;
  }

  .single-proj a {
    color: #FCDEEA;
    text-decoration: none;
  }

 

  /* Mobile Layout Styles */
  @media (max-width: 767px) {
    .portfolio-home {
      flex-direction: column; /* Mobile: Stack elements vertically */
    }

    .portfolio-left,
    .portfolio-right {
      flex: 1;
    }

    .nav-menu {
      display: flex;
      flex-direction: row; /* Mobile: Show Nav.Item in a row */
      justify-content: space-around;
    }
  }

  /* Desktop Layout Styles */
  @media (min-width: 768px) {
    .portfolio-home {
      flex-direction: row; /* Desktop: Side-by-side layout */
    }

    .portfolio-left {
      flex: 1;
    }

    .portfolio-right {
      flex: 2;
    }

    .nav-menu {
      flex-direction: column; /* Desktop: Show Nav.Item in a column */
      align-items: center;
    }

    /* Additional styles for the desktop layout */
  }
`;
