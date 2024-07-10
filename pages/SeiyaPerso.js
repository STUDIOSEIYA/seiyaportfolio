import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import * as THREE from 'three';
import Image from 'next/image';
import useMobileDetect from '../hooks/useMobileDetect'; // Adjust the path as necessary

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

  const isMobile = useMobileDetect();

  return (
    <primitive 
      position={isMobile ? [0.07, -0.8, 2.5] : [0, -0.8, 2.5]} 
      object={scene} 
      scale={1.4} 
    />
  );
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
        <Html position={[-1, -2, 0]}>
          <div className="text-content-me">
            <div className="aboutSeiyaPerso">
              <a href="https://behance.net/seiyafx" target="_blank">
                <Image
                  src="/assets/img/behance.svg" // Adjust the path as necessary
                  alt="Behance"
                  width={20}
                  height={20}
                  style={{ width: '40px', height: '40px' }} // Inline styles to enforce dimensions
                />
              </a>
              <a href="https://x.com/SeiyaFX" target="_blank">
                <Image
                  src="/assets/img/ig.svg" // Adjust the path as necessary
                  alt="Instagram"
                  width={20}
                  height={20}
                  style={{ width: '40px', height: '40px' }} // Inline styles to enforce dimensions
                />
                <Image
                  src="/assets/img/twitter.svg" // Adjust the path as necessary
                  alt="Twitter"
                  width={20}
                  height={20}
                  style={{ width: '40px', height: '40px' }} // Inline styles to enforce dimensions
                />
              </a>
              <a href="http://linkedin.com/in/thomas-travert-5852a1149/" target="_blank">
                <Image
                  src="/assets/img/Linkedin.svg" // Adjust the path as necessary
                  alt="Linkedin"
                  width={20}
                  height={20}
                  style={{ width: '40px', height: '40px' }} // Inline styles to enforce dimensions
                />
              </a>
            </div>
            <a>contactseiyafx@gmail.com</a>
          </div>
        </Html>
      </Suspense>
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default ThreeDModel;
