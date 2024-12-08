import React, { Suspense, useEffect, useRef, useState } from 'react';
import {  useThree, useFrame } from '@react-three/fiber';
import {  useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei';
// import { useControls } from "leva"


export default function ModelViewer() {
  const meshRef = useRef()
  const { nodes, materials } = useGLTF("/assets/torrus5.glb")
  const { viewport } = useThree()
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    if(meshRef.current){
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.z += 0.01
      meshRef.current.rotation.y += 0.001

      const progress = Math.min(scroll / 1000, 1);


      meshRef.current.position.x =
        progress < 0.5 ? -viewport.width * progress * 2 : viewport.width * (progress - 0.5) * 2;

      const scaleFactor = 40 + progress * 20; 
      const scale = viewport.width / scaleFactor;
      meshRef.current.scale.setScalar(scale);
    }
  })

  // const materialProps = useControls({
  //   thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
  //   roughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //   transmission: {value: 1, min: 0, max: 1, step: 0.1},
  //   ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
  //   chromaticAberration: { value: 0.02, min: 0, max: 1},
  //   backside: { value: true},
  // })
  const transmitionValues = {
    thickness: 3,
    roughness: 0,
    transmission: 1,
    ior: 1.1,
    chromaticAberration: 0.03,
    backside: true,
  }
  return (
    <group>
      <Text position={[0, 0, -7]} font='/font/PPNeueMontreal-Bold.otf' fontSize={  viewport.width / 3} color="white" anchorX="center" anchorY="middle" >Hello world</Text>
      <mesh {...nodes.Torus002} ref={meshRef} scale={ viewport.width / 40} >
        <MeshTransmissionMaterial {...transmitionValues}/>
      </mesh>
    </group>
  );
}
