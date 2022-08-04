import React from 'react';
import '../../styles/About.scss';
import Img from '../img/img2.jpg';
import {ProgressBar} from 'react-bootstrap';


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

      <form className='cnt'>
        <div className='info-con'>
          <div className='topic'>
            <label for="fname">Birthday:</label>
            <label for="age">Age:</label>
            <label for="addres">Address:</label>
            <label for="phone">Phone:</label>
          </div>
          <div  className='information'> 
            <label>17/10/1996</label>
            <label>25</label>
            <label>izmir</label>
            <label>0(545)xxx xx xx</label>
          </div>
        </div >
        <div className='info-con'>
          <div className='topic'>
            <label for="nationality">Nationality:</label>
            <label for="study">Study:</label>
            <label for="degree">Degree:</label>
            <label for="interests">Interests:</label>
          </div>
          <div > 
            <label>Turkey</label>
            <label>Dokuz Eylül Univercity</label>
            <label>Lisans</label>
            <label>Latin Dance</label>
          </div>
        </div>
      </form> 
      <hr/>

       <button type='submit'>Download CV</button> 
       <br/>
       <br/>



    <section  className="container-progress">
        <h2 >Programming Skills</h2>
         <div className="progress-bar">
            <div >
                  <h4>Reactjs</h4>
                  <ProgressBar className='colorr' variant="success" now={35} /> 
                    <h4>JavaScript</h4>
                    <ProgressBar now={40} />
                    <h4>HTML & CSS:</h4>
                    <ProgressBar now={35} />

            </div>  
            <div>
                    <h4>Python</h4>
                    <ProgressBar now={55} />
                    <h4>C</h4>
                    <ProgressBar now={60} />
                    <h4>Sql Server</h4>
                    <ProgressBar now={65} />
              
            </div> 
      
      </div>
    </section>

    

    <div className='education'>
      <div className='container-cub'>
        <div className='cub'><p></p></div>
        <div><p>2018-2023</p></div>
      </div>
      <div className='container-cub'>
        <div className='cub'><p></p></div>
        <div><p>2015-2016</p></div>
      </div>
      <div className='container-cub'>
        <div className='cub'><p></p></div>
        <div><p>2010-2014</p></div>
      </div>




    </div>
    
   <hr/>
   <br/>
   <br/>

 </div>

    );
}
export default About;