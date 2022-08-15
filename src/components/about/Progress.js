import React from "react";
import {ProgressBar} from 'react-bootstrap';


const Progress = (prop) =>{

    return(
        
         <div className="progress-bar w-100 ">
           
                  <h4>{prop.title}</h4>
                  <ProgressBar className='colorr w-100'  variant="success" now={prop.now} /> 

        </div>

 
    );

};

export default Progress;