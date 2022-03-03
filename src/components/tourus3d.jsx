import React, {  useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Tourus(props){
    const ref=useRef(null)
     useFrame(() => (ref.current.rotation.x=ref.current.rotation.y += 0.01))

     
  
    return(
      <mesh visible position={[0, 0, 0]} castShadow ref={ref}>
          {/*  below acts as a torchlight */}
          <directionalLight position={[0,5,0]}/>
          {/* ambient light is the general "sun" */}
      <ambientLight/>
      <torusGeometry args={[10, 3, 16, 100 ]}/>


       <meshStandardMaterial attach="material" color={props.colors} />


    </mesh>
    )
  }