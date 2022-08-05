import React from 'react';
import '../../styles/About.scss';
import Img from '../img/img2.jpg';
import {ProgressBar} from 'react-bootstrap';
import CV from "../img/nalanKaracaCV.pdf";
import InfoAboute from './InfoAboute';

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
        <InfoAboute />
      
      <hr/>
       

       <a href={CV} download className='btn'>Download CV</a>
       <br/>
       <br/>
       <br/>
       <br/>




    <section  className="container-progress">
        <h2 >Programming Skills</h2>
         <div className="progress-bar">
            <div >
                  <h4>Reactjs</h4>
                  <ProgressBar className='colorr' variant="success" now={35} /> 
                    <h4>JavaScript</h4>
                    <ProgressBar className='colorr' now={40} />
                    <h4>HTML & CSS:</h4>
                    <ProgressBar className='colorr' now={35} />

            </div>  
            <div>
                    <h4>Python</h4>
                    <ProgressBar className='colorr' now={55} />
                    <h4>C</h4>
                    <ProgressBar className='colorr' now={60} />
                    <h4>Sql Server</h4>
                    <ProgressBar className='colorr' now={65} />
              
            </div> 
      
      </div>
    </section>

    
    <hr/>
   <br/>
   <br/>

   
    <div className='education-experiance-conteiner'>
        <div className='container-grid'>
                  <h1>Education</h1>
                  <div className='container-cub'>
                      <div className='container-cub-row'>
                        <div className='cub'><p></p></div>
                        <div><p>2018-2023</p></div>
                      </div>
                    <div className='info-cub'>
                          <h4>Dokuz Eylül Universty</h4>
                          <h6>Computer Science</h6>
                    </div>
                 </div>  

                  <div className='container-cub'>
                      <div className='container-cub-row'>
                        <div className='cub'><p></p></div>
                        <div><p>2015-2016</p></div>
                      </div>
                      <div className='info-cub'>
                        <h4>Dokuz Eylül Universty</h4>
                        <h6>Computer Programming</h6>
                      </div>
                  </div>   

                    <div className='container-cub'>
                        <div className='container-cub-row'>
                          <div className='cub'><p></p></div>
                          <div><p>2010-2014</p></div>
                        </div>
                      <div className='info-cub'>
                       <h4>Fener High School</h4>
                       <h6>Computer Science</h6>
                      </div>
                   </div>     
          </div>
     



          <div className='container-grid'>
                  <h1>Experiance</h1>
                  <div className='container-cub'>
                    <div className='container-cub-row'>
                      <div className='cub'><p></p></div>
                      <div><p>2022-</p></div>
                    </div>
                    <div className='info-cub gir'>
                        <h4>İs Net</h4>
                        <h6>Intern Frontend Developer</h6>
                     </div> 
                  </div>
          

                  <div className='container-cub'>
                      <div className='container-cub-row'>
                        <div className='cub'><p></p></div>
                        <div><p>2016-2016</p></div>
                        </div>
                        <div className='info-cub'>
                          <h4>Univera</h4>
                          <h6>Intern</h6>
                        </div>      
                  </div>  
          
</div>
</div>
    



    
   
    
   <hr/>
   <br/>
   <br/>

 </div>

    );
}
export default About;