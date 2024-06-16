// ThreeDModel.js
import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
  const { scene, animations } = useGLTF('/assets/3d/saluteglb.glb');
  const mixer = useRef();

  useEffect(() => {
    if (animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.loop = THREE.LoopRepeat;
      action.play();
    }
    return () => mixer.current?.stopAllAction();
  }, [scene, animations]);

  useFrame((state, delta) => {
    mixer.current?.update(delta);
  });

  return <primitive position={[0, -0.8, 2.5]} object={scene} scale={1.4} />;
};

const ThreeDModel = () => {
  const [showAwards, setShowAwards] = useState(false);
  const [animateAwards, setAnimateAwards] = useState(false);
  const [showReferences, setShowReferences] = useState(false);
  const [animateReferences, setAnimateReferences] = useState(false);

  const handleAwardsButtonClick = () => {
    setShowAwards(true);
    setAnimateAwards(true);
    setTimeout(() => setAnimateAwards(false), 500); // Duration of the animation
    setTimeout(() => setShowAwards(false), 30500); // Hide after 30 seconds + animation duration
  };

  const handleReferencesButtonClick = () => {
    setShowReferences(true);
    setAnimateReferences(true);
    setTimeout(() => setAnimateReferences(false), 500); // Duration of the animation
    setTimeout(() => setShowReferences(false), 30500); // Hide after 30 seconds + animation duration
  };

  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model />
        <Html position={[-5.2, -2.1, 0]}>
          <div className="text-content-me">
            <div className="aboutSeiyaPerso">
              <h2>About me</h2>
            </div>
            <p className="biography">
              Captivated by the image, the audiovisual but also the drawing since I discovered graphic design at the age of 15.
              Handling the Adobe suite in a self-taught manner allowed me to increase my technique but also my autonomy.
              I am able to adapt to teamwork. I have helped and worked with companies all over the world.
            </p>
            <button onClick={handleAwardsButtonClick}>View Awards</button>
            <button onClick={handleReferencesButtonClick}>View References</button>
          </div>
        </Html>

        {showAwards && (
          <Html position={[-8, 2, 0]}>
            <div className={`text-content ${animateAwards ? 'fade-in-slide-up' : ''}`}>
              <div className="aboutSeiyaPerso">
                <h2>Awards</h2>
              </div>
              <div className="biography">
                <p><span>BIG WINNER</span></p>
                <p><span>ADOBE X SONY ANIMATIONS</span></p>
                <p>CONTEST SPIDERMAN IN THE SPIDERVERSE</p>
                <p><span>TOP 25 WORDLINE MARSHMELLO CONTEST</span></p>
                <p><span>CONTEST ADOBE X MARSHMELLO</span></p>
              </div>
            </div>
          </Html>
        )}

        {showReferences && (
          <Html position={[2.5, 1.5, 0]}>
            <div className={`text-content ${animateReferences ? 'fade-in-slide-up' : ''}`}>
              <div className="aboutSeiyaPerso">
                <h2>References</h2>
              </div>
              <div className="biography">
                <a href="https://twitter.com/AdobeDesign/status/1398140736919453696" target="_blank">
                  <span>Adobe Design /</span> Daft Punk 2070 Remastered
                </a>
                <a href="https://www.youtube.com/watch?v=g2lz_oVpgK8&t=3654s" target="_blank">
                  <span>Adobe Creative Cloud Live /</span> Portfolio Review
                </a>
                <a href="https://twitter.com/AdobeFrance/status/1131273828003401729" target="_blank">
                  <span>Adobe France /</span> Daft Punk 2070
                </a>
                <a href="https://www.youtube.com/watch?v=xixEel-itVA" target="_blank">
                  <span>Adobe Creative Cloud Live /</span> Portfolio Review
                </a>
                <a href="https://twitter.com/AdobeFrance/status/925062053391351808" target="_blank">
                  <span>Adobe France /</span> Coca Cola #CokexAdobexYou
                </a>
                <a href="https://twitter.com/AdobeFrance/status/925062053391351808" target="_blank">
                  <span>Adobe France /</span> Coca Cola #CokexAdobexYou
                </a>
                <a href="https://twitter.com/wacom/status/953318939660029952" target="_blank">
                  <span>Wacom /</span> Artwork of #Cintiq22HD
                </a>
                <a href="https://twitter.com/AdobeFrance/status/1092798796084494336" target="_blank">
                  <span>Adobe France /</span> Black and White Illustrations
                </a>
                <a href="https://twitter.com/XPPentablette/status/1482299141430681602" target="_blank">
                  <span>XP Pen France /</span> Portfolio Review
                </a>
                <a href="https://www.instagram.com/p/CcLn0EvsMiW/?igshid=YmMyMTA2M2Y%3D" target="_blank">
                  <span>Insydium XParticles /</span> Coca Cola #CokexAdobexYou
                </a>
              </div>
            </div>
          </Html>
        )}
      </Suspense>
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default ThreeDModel;
