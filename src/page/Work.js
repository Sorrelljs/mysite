// styles 
// import { Link } from 'react-router-dom';
// import { IconContext } from 'react-icons'
import Portfolio from '../components/Portfolio'

import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as DiIcons from "react-icons/di";
import { useEffect } from 'react';


// pages

// components


export default function Work() {


  useEffect(() => {
    setTimeout(() => {
      document.body.style.backgroundColor = "#F8F0E3";
    }, 1000)
  })


  return (
    <>

    <button><a href="/">BACK</a></button>
    <div className='work'>
      <div className="portfolio--containers">
    <Portfolio 
    title='Kara Kata'
    message='A Nigerian retreat based in Mission, BC.'
    tags= {[<SiIcons.SiPhp />,<IoIcons.IoLogoCss3 />,<AiIcons.AiFillHtml5 />]}
    github={''}
    website={'http://karakataafrobeatsociety.com/'}
    cover={'cover--1'}
    />
    <Portfolio 
    title='Magic Match'
    message='A medieval guessing game. Match a pair to win!'
    tags= {[<FaIcons.FaReact />, <IoIcons.IoLogoCss3 />,<AiIcons.AiFillHtml5 />]}
    github={'https://github.com/Sorrelljs/magic-match'}
    website={'https://sorrelljs.github.io/magic-match/'}
    cover={'cover--2'}
    />
    <Portfolio 
    title='Motohut'
    message='A Shopify site built of symmetry.'
    tags= {[<FaIcons.FaShopify />, <IoIcons.IoLogoJavascript />, <IoIcons.IoLogoCss3 />]}
    github={''}
    website={'https://github.com/Sorrelljs/codecore_drillz'}
    cover={'cover--3'}
    />
    <Portfolio 
    title='InstaNews'
    message='Instanews gives you news on demand by category. Using the New York Times API.'
    tags= {[<DiIcons.DiRuby />, <AiIcons.AiFillHtml5 />]}
    github={'https://github.com/Sorrelljs/instanews'}
    website={'https://sorrelljs.github.io/instanews/'}
    cover={'cover--4'}
    />
    <Portfolio 
    title='Blogs on Rails'
    message='A CRUD application. Create an account and make a blog!'
    tags= {[<DiIcons.DiRuby />, <AiIcons.AiFillHtml5 />]}
    github={'https://github.com/Sorrelljs/blog_on_rails'}
    website={''}
    cover={'cover--5'}
    />
    <Portfolio 
    title='Wildfire Tracker'
    message='Too many wildfires occuring! I built an app that uses the google maps API/NASA which locates wildfires'
    tags= {[<FaIcons.FaReact />, <IoIcons.IoLogoCss3 />,<AiIcons.AiFillHtml5 />]}
    github={'https://github.com/Sorrelljs/wildfire-tracker'}
    website={'https://sorrelljs.github.io/wildfire-tracker'}
    cover={'cover--6'}
    />
    </div>

    </div>
  </>
  );
}
