import React, {  useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Cyber from '../assets/nasa-pic-wide.jpg'


export default function Box(props) {
    const mesh = useRef()
    useFrame(() => (mesh.current.rotation.y += 0.01))
    const loader=new THREE.TextureLoader()
    const base=loader.load(Cyber)

    return (
      <mesh
        {...props}
        ref={mesh}
    
    >
        <sphereBufferGeometry args={[1.4, 60, 60 ]} />

        <meshBasicMaterial attach="material" map={base} color="green"  />

        </mesh>
    )
  }