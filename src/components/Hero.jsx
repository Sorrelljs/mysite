
import '../CSS/hero.scss'
import ReactTypingEffect from 'react-typing-effect';
import Box from './3dBox';
import { Canvas } from "@react-three/fiber"
import { IconContext } from 'react-icons'
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";




export default function Hero() {
    return ( 
    
        <div class="hero-main" id="hero">
            
           <div className="heading-section">
           <div className="intro">
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
            </div>
           </div>
        
           <Canvas className="box-object">
               <Box/>

               </Canvas>


     
            
        </div>
    )
} 