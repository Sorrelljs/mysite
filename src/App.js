import './App.scss'
import Navbar from './components/navbar';
import Hero from './components/Hero';
import { Canvas } from '@react-three/fiber';
import Tourus from './components/tourus3d';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Work from './page/Work';
import Home from './page/Home';



export default function App(){



  
return (
<>

  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Work />} />
        </Routes>
      </BrowserRouter>


</>
);
};