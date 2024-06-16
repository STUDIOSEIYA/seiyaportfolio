// ThreeDModel.js
import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
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

  return <primitive position={[0, -1, 2.5]} object={scene} scale={1.5} />;
};

const ThreeDModel = () => {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default ThreeDModel;
