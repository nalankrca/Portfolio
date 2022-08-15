
import React, { useState } from 'react';
import {CgMenu} from 'react-icons/cg';
import {Link} from 'react-router-dom';

const MobileNav = () =>{
 const [openMenu,setOpenMenu ] = useState(false);


    return (
      
        <div className='navbar navHamburger'>
              
                  <div className='namee nameham'>
                    <p className='ham'>Nalan Karaca</p>
                  </div>
                  
                  <a href='#menu'className='hamburgerActivate' onClick={()=> setOpenMenu(!openMenu)} ><CgMenu/></a>
                  {
                    openMenu && (                  
                    <div className='linkk'>
                    <Link to='/home'  > Home</Link>
                    <Link to='/about'  > About</Link>
                    <Link to='/contact' > Contact</Link>               
                </div>
                )
                  }

            

        </div>
    
      );
}
export default MobileNav;