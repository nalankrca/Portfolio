import React from "react";


const EducationExper =(props)=>{

    return(
        <div>
              
                  <div className='container-cub'>
                      <div className='container-cub-row'>
                        <div className='cub'><p></p></div>
                        <div><p>{props.date}</p></div>
                      </div>
                     <div className='info-cub'>
                          <h4>{props.school}</h4>
                          <h6>{props.department}</h6>
                    </div>
                 </div>       

        </div>


    );


}


export default  EducationExper;


