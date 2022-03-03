import Navbar from '../components/navbar';
import Hero from '../components/Hero';
import { Canvas } from '@react-three/fiber';
import Tourus from '../components/tourus3d';
import { useState } from 'react';



export default function Home(){
const [darkMode, setDarkMode ] = useState(true)
  
return (
<>
<div className="label--container">
  <label className="dark--label" style={darkMode ? {color:"black"} : {color:"white"}} for="toggle">Dark Mode?</label>
    <input 
    id="toggle" 
    type="checkbox"
    onClick={()=> {setDarkMode(!darkMode) }} />
</div>

{ darkMode ? <Canvas style={{position:'fixed', backgroundColor:"white"}}>
  <Tourus colors={"#806043"}/>
</Canvas>
:
<Canvas style={{position:'fixed', backgroundColor:"black"}}>
  <Tourus colors={"#888888"}/>
</Canvas>
}

<div style={{position:"fixed",width:"100%"}}>
  <Navbar/>
  <Hero state={darkMode}/>
  </div>

  

</>
);
};