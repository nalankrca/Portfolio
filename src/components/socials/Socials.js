import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import '../../styles/Home.scss';
 
const Social =()=>{
return(

    <div className='social'>

        <a href='https://www.linkedin.com/in/nalan-karaca-653238143/'  ><BsLinkedin/></a>
        <a href='https://github.com/nalankrca'  ><BsGithub/></a>
       
    </div>
);


};

export default Social;