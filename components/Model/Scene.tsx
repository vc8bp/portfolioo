"use client"

import React from 'react'
import { Canvas } from '@react-three/fiber';
import ModelViewer from './ModelViewer';
import { Environment } from '@react-three/drei';


function Scene() {
  return (
    <Canvas>
        <directionalLight intensity={3} position={[0, 3,2]} />
        <Environment preset='city' />
        <ModelViewer/>
    </Canvas>
  )
}

export default Scene