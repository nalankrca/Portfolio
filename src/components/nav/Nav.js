import React from 'react';
import '../../styles/Navbar.scss';

const Navi = () =>{

    return (
      
      <div className='navbar'>

         
        <div>
        <div className='namee'>
          <p >Nalan Karaca</p>
        </div>
          <a href="/home">Home</a>
          <a href="/about">About</a>     
          <a href="/contact">Contact</a>
        </div>
      </div>
      );
}
export default Navi;