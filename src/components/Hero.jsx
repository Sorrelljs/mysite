
import '../CSS/hero.scss'
import ReactTypingEffect from 'react-typing-effect';
import Box from './3dBox';
import { Canvas } from "@react-three/fiber"
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as RiIcons from "react-icons/ri";
import { useEffect, useState } from 'react';





export default function Hero(state) {

const [contact, setContact] = useState(false)
const [colorChange, setColorChange] = useState('black')

useEffect(() => {
    if(state.state === false) {
        setColorChange('red')
    } else {
        setColorChange('black')
    }
}, [state.state])
    
    return ( 
    
        <div class="hero-main" id="hero">
           <div className="heading-section">
           <div className="intro">
          { state.state ?      
           <ReactTypingEffect
        text={["Hello.", "I am Sorrell.","I am a programmer.","I am a writer.","I am a developer."]}
        speed={100}
        typingDelay={1000}
        eraseDelay={1000}
        eraseSpeed={100}
        cursorRenderer={cursor => <h1 className="cursor">{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (<p className="name">{text}</p>)}}        
      />
      :
           <ReactTypingEffect
        text={["Hello.", "I am Sorrell.","I am a programmer.","I am a writer.","I am a developer."]}
        speed={100}
        typingDelay={1000}
        eraseDelay={1000}
        eraseSpeed={100}
        cursorRenderer={cursor => <h1 className="cursor">{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (<p className="name" style={{color:"red"}}>{text}</p>)}}        
      />
        }
           </div>
                
           <h4 className="about">
               A programmer/Writer/Student/Learner
           </h4> 
           <div className="buttonWrap">

            <button>
            <a href="https://www.github.com/sorrelljs">VISIT MY GITHUB</a>
            <span className='home--icons'><AiIcons.AiOutlineGithub /></span>
            </button>

            <button>
                <a href="/portfolio">VISIT MY WORK</a>
                <span className='home--icons'><SiIcons.SiFurrynetwork /></span>
                </button>
            <button className='contact--button' onClick={() => setContact(!false)}>
                <span>CONTACT</span>
                <span className='home--icons'><RiIcons.RiContactsFill/></span>
                </button>
               { contact && <span className='email--info' style={{color:colorChange}}><strong>sjsohota@gmail.com</strong></span> }
               {/* If state.state is false style={{color: "red"}} */}
            </div>
           </div>
        
           <Canvas className="box-object">
               <Box state={state}/>

               </Canvas>


     
            
        </div>
    )
} 