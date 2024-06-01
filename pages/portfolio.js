import Head from 'next/head'
import Link from "next/link"
import { useState,useEffect } from 'react'
import { useRouter } from "next/router"
import { useStateContext } from "../lib/context"
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


import {
  PortfolioPageWrapper

} from "../styles/PortfolioStyles";


export default function About() {

        return (
            <PortfolioPageWrapper>
         


         <div className="portfolio-home">

         <Tab.Container id="left-tabs-example" defaultActiveKey="all">
      <Row className="portfolio">
        
      <div  className="portfolio-left">
              <Nav variant="pills" className="portfolio-filters">
                <Nav.Item>
                  <Nav.Link eventKey="all">All Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="first">Art Direction</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Illustrations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">3D</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Motion Design</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
   
        <div className="portfolio-right">
          <Tab.Content>
          <Tab.Pane eventKey="all">
              <div className="gallery-work">

                <div className="single-proj">
                  <img src={"../assets/img/portfolio/artdirection/preview_atletec_zwift.png"} alt="Atletec Zwift" />
                  <p>ATLETEC ZWIFT</p>

                </div>

                <div className="single-proj">
                <a href="portfolio/artdirNike">  <img src={"../assets/img/portfolio/artdirection/preview_nike_wild.png"} alt="Nike Wild" />
                  <p>NIKE WILD RUN</p></a>
                </div>

                <div className="single-proj">
                <a href="portfolio/artdirSchalke"> <img src={"../assets/img/portfolio/artdirection/preview_shalke_esports.png"} alt="Schalke Esports" />
                  <p>SCHALKE ESPORTS</p> </a>
                </div>

                <div className="single-proj">
                <a href="portfolio/artdirXbox"> <img src={"../assets/img/portfolio/artdirection/preview_xbox_wire.png"} alt="Xbox Wire" />
                  <p>XBOX WIRE</p> </a>
                </div>
  
                <div className="single-proj">
              <img src={"../assets/img/portfolio/illustrations/rhino/preview_rhinoshield.png"} alt="Rhinoshield" />
              <p>RHINOSHIELD</p>

            </div>

            <div className="single-proj">
              <img src={"../assets/img/portfolio/illustrations/reyes/preview_reyes.png"} alt="Reyes Tokyo x Seiya" />
              <p>REYES TOKYO x SEIYA</p>

            </div>

            <div className="single-proj">
            <img src={"../assets/img/portfolio/illustrations/venicecarnaval/preview_venice_carnaval.png"} alt="Venice Carnaval" />
              <p>VENICE CARNAVAL</p>
            </div>
         <div className="single-proj">
         <a href="portfolio/3Dluxury">  <img src={"../assets/img/portfolio/3d/luxury/preview_3D_luxuray.png"} alt="3D Luxury" /></a>
                <p>3D LUXURY</p>

              </div>
           
              <div className="single-proj">
              <a href="portfolio/3Dapps">  <img src={"../assets/img/portfolio/3d/apps/preview_3D_apps.png"} alt="3D Apps" /></a>
                <p>3D APPS</p>

              </div>

              <div className="single-proj">
              <a href="portfolio/3Dshine">    <img src={"../assets/img/portfolio/3d/shine/preview_3D_shine.png"} alt="Shine 3D" /></a>
                <p>SHINE 3D</p>
              </div>

              <div className="single-proj">
                <img src={"../assets/img/portfolio/motiondesign/preview_showreel2021.png"} alt="2021 Showreel" />
                <p>2021 SHOWREEL</p>

              </div>

              <div className="single-proj">
              <img src={"../assets/img/portfolio/motiondesign/preview_showreel2022.png"} alt="2022 Showreel" />
                <p>2022 SHOWREEL</p>

              </div>

              </div>
            
            </Tab.Pane>
            <Tab.Pane eventKey="first">
              <div className="gallery-work">

                <div className="single-proj">
                  <img src={"../assets/img/portfolio/artdirection/preview_atletec_zwift.png"} alt="Atletec Zwift" />
                  <p>ATLETEC ZWIFT</p>

                </div>

                <div className="single-proj">
                <a href="portfolio/artdirNike"><img src={"../assets/img/portfolio/artdirection/preview_nike_wild.png"} alt="Nike Wild" />
                  <p>NIKE WILD RUN</p></a>
                </div>

                <div className="single-proj">
                <a href="portfolio/artdirSchalke">  <img src={"../assets/img/portfolio/artdirection/preview_shalke_esports.png"} alt="Schalke Esports" />
                  <p>SCHALKE ESPORTS</p> </a>
                </div>

                <div className="single-proj">
                <a href="portfolio/artdirXbox"> <img src={"../assets/img/portfolio/artdirection/preview_xbox_wire.png"} alt="Xbox Wire" />
                  <p>XBOX WIRE</p> </a>
                </div>
              </div>
            
            </Tab.Pane>
            <Tab.Pane eventKey="second">

            <div className="gallery-work">

            <div className="single-proj">
              <img src={"../assets/img/portfolio/illustrations/rhino/preview_rhinoshield.png"} alt="Rhinoshield" />
              <p>RHINOSHIELD</p>

            </div>

            <div className="single-proj">
              <img src={"../assets/img/portfolio/illustrations/reyes/preview_reyes.png"} alt="Reyes Tokyo x Seiya" />
              <p>REYES TOKYO x SEIYA</p>

            </div>

            <div className="single-proj">
            <img src={"../assets/img/portfolio/illustrations/venicecarnaval/preview_venice_carnaval.png"} alt="Venice Carnaval" />
              <p>VENICE CARNAVAL</p>
            </div>



            </div>
            
            </Tab.Pane>
            <Tab.Pane eventKey="third">
            <div className="gallery-work">

              <div className="single-proj">
              <a href="portfolio/3Dluxury">  <img src={"../assets/img/portfolio/3d/luxury/preview_3D_luxuray.png"} alt="3D Luxury" /></a>
                <p>3D LUXURY</p>

              </div>

              <div className="single-proj">
              <a href="portfolio/3Dapps">  <img src={"../assets/img/portfolio/3d/apps/preview_3D_apps.png"} alt="3D Apps" /></a>
                <p>3D APPS</p>

              </div>

              <div className="single-proj">
              <a href="portfolio/3Dshine">    <img src={"../assets/img/portfolio/3d/shine/preview_3D_shine.png"} alt="Shine 3D" /></a>
                <p>SHINE 3D</p>
              </div>



              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
            <div className="gallery-work">

              <div className="single-proj">
                <img src={"../assets/img/portfolio/motiondesign/preview_showreel2021.png"} alt="2021 Showreel" />
                <p>2021 SHOWREEL</p>

              </div>

              <div className="single-proj">
              <img src={"../assets/img/portfolio/motiondesign/preview_showreel2022.png"} alt="2022 Showreel" />
                <p>2022 SHOWREEL</p>

              </div>

              <div className="single-proj">
              <img src={"../assets/img/portfolio/motiondesign/preview_showreel2022.png"} alt="2022 Showreel" />
                <p>2023 SHOWREEL</p>

              </div>



              </div>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Row>
    </Tab.Container>

          
         </div>
          </PortfolioPageWrapper>
        );

}
