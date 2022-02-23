import { Link } from "react-router-dom";
import { IconContext } from 'react-icons'



//styles 
import '../CSS/portfolio.scss'



function Porfolio({title, message, tags, github, website, cover}) {


  
  return (
    <>
    <IconContext.Provider value={{color: '#888888', size: '30px'}}>
      


      {/* portfolio  */}
      
       <div className={`portfolio--container ${cover}`}>
        <h4 className="portfolio--title">{title}</h4>
        <p class="portfolio--para">{message}</p>
            <div class="language--tags">

            {tags && tags.map((tag, index) => (
              <span key={index}>{tag}</span>
              
              ))}
            </div> 
            <div class="button--tags">
              { github === '' ? 
              ""
              :
              <Link  to={github} target="_blank" class="github-ref">Source Code</Link>
              }
              { website === '' ? 
              "" 
              :
              <Link to={website} target="_blank" class="button-4">View</Link>
              }
              {/* <Link to="https://www.youtube.com/WebkitCoding" target="_blank"><icon class="fab-fa-youtube"></i>Youtube</Link> */}
            </div> 
      </div>
      </IconContext.Provider>

  </>
  );
}

export default Porfolio;
