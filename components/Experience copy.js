import { useAnimations, useGLTF } from '@react-three/drei'
import { Html, PivotControls, TransformControls, OrbitControls } from '@react-three/drei'
import {useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useEffect } from 'react'

const Experience = () => {

    const model = useLoader(GLTFLoader, './assets/model/menu.glb')
    console.log(model)

    const animations = useAnimations(model.animations, model.scene)
    console.log(animations)

   const runMenuAnimation = () => {
    const action = animations.actions.animation_0
    action.play()
   }

   const stopMenuAnimation = () => {
    const action = animations.actions.animation_0
    action.stop()
   }

    return (
      <>

           {/* <OrbitControls makeDefault /> */}

           <Html wrapperClass="label" position={ [ -92, 12, 0 ]}>Hi, I'm <span>Thomas</span>, I do <br/> <span>Graphic / Motion Design</span></Html>


            <directionalLight castShadow color="#0xffa4ee" position={ [ -92, 12, 15  ] } intensity={ 2 } />
            <ambientLight intensity={ .2 } color="#0xffa4ee"  position={ [ -92, 32, 15  ]} />
            <pointLight intensity={2} position={[-92,12, 5 ]} />

            <primitive object={ model.scene } scale={ 0.75}  rotation-y={ -0.26 } position={ [ 72, 3, 0 ] } onPointerOver={runMenuAnimation} /* onPointerOut={stopMenuAnimation}*/ />

      </>
    );
  };
  
  export default Experience;