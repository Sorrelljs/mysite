import Navbar from '../components/navbar';
import Hero from '../components/Hero';
import { Canvas } from '@react-three/fiber';
import Tourus from '../components/tourus3d';



export default function Home(){
  
return (
<>
<Canvas style={{position:'fixed'}}>
  <Tourus colors={"#806043"}/>

</Canvas>

<div style={{position:"fixed",width:"100%"}}>
  <Navbar/>
  <Hero/>
  </div>

  

</>
);
};