// ThreeDModel.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/assets/3d/saluteglb.glb');
  return <primitive position={[0.15, -1, 2.9]}  object={scene} scale={1} />;
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
