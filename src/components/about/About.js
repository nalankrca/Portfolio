import React from 'react';
import Img from '../img/nalan6.png';
import CV from "../img/sablonCV.pdf";
import Information from './Information';
import ProgressInfo from './ProgressInfo';
import EducationExperInfo from './EducationExperInfo';





const About = () =>{

    return (

 <div className='container'>
   <div className='info'>
      <div className='aboutme'><h1>About me</h1></div>
      <div className='img'><img  src={Img} alt="" className='img'/></div>
      <div className='name'>
        <h1>Nalan Karaca</h1>
        <p>Frontend Developer</p>
      </div>
        </div>
      <hr/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Perspiciatis nostrum, 
          eaque velit ipsam facilis sed, quisquam
          nesciunt unde nihil voluptatum commodi consequuntur molestiae?
          Fugiat, perspiciatis reprehenderit. Architecto delectus vitae
          deserunt!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Perspiciatis nostrum, 
          eaque velit ipsam facilis sed, quisquam
          nesciunt unde nihil voluptatum commodi consequuntur molestiae?
          Fugiat, perspiciatis reprehenderit. Architecto delectus vitae
          deserunt!</p>
          <hr/>


          <Information />
      
          <hr/>
          <a href={CV} download className='btn'>Download CV</a>
   
          <ProgressInfo/>
 
          <EducationExperInfo/>
          

        
      <hr/>
      <br/>
      <br/>

 </div>

    );
}
export default About;