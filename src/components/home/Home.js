import React from 'react';
import Img from '../img/nalan.png';
import Social from '../socials/Socials';
//import {Container} from "react-bootstrap";
const Home = () =>{

    return (
        <div className='home'>

   
         <div className='container'>
            <div className='container-grid'>
            <div className='about-img'><img  src={Img} alt="" className='img'/></div>
            <div className='container-info'>
               <div className='name'>
                  <h1>NALAN KARACA</h1>
               </div>
               <div className='about-me'>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis nostrum, eaque velit ipsam facilis sed, quisquam
              nesciunt unde nihil voluptatum commodi consequuntur molestiae?</p>
               </div>
               <div className='social'><Social/> </div>   
            </div>
            </div>

          </div>
                    
           
          

   </div>
 );
}
export default Home;