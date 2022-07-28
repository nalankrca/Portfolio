import React from 'react';
import '../../styles/About.scss';
import Img from '../img/img2.jpg';
import {CardBody,CardTitle,CardSubtitle} from "reactstrap";
const About = () =>{

    return (
        <div className='about'>
           
            <img  src={Img} alt=""/>
  <CardBody>
        <CardTitle tag="h5">  Card title</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6"> Card subtitle </CardSubtitle>
    </CardBody>
               
                
                <div >
                    <h2>About-Nalan Karaca</h2>
                    <p>özet djksdkjasdjahsdkjaskdh</p>
                </div>

                <div>
                    <p>logolar</p>
                </div>
            

      
            
      </div>
    );
}
export default About;