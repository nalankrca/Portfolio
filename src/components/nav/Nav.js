import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () =>{
 


    return (
      
        <div className='navbar navHamburger'>
              
                  <div className='namee nameham'>
                    <p className='ham'>Nalan Karaca</p>
                  </div>            
                    <div className='linkk'>
                    <Link to='/home'  > Home</Link>
                    <Link to='/about'  > About</Link>
                    <Link to='/contact' > Contact</Link>               
                </div>
        </div>
    
      );
}
export default Nav;