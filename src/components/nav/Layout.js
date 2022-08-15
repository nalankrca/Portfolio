import React from "react";
import {useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Layout = () => {
    const [windowDimension, setWindowDimension] = useState(null);

     useEffect(() => {
        setWindowDimension(window.innerWidth);
      },[]);
    
      useEffect(() => {
        function handleResize() {
          setWindowDimension(window.innerWidth);
        }
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      });
    
    const isMobile = windowDimension <= 767;    
    return(
    <div>
        {!isMobile?(
            <Nav/>
        ):(
            <MobileNav/>
        )}
          <main id="js-page-content" role="main" className={`page-content `}>
        <Outlet />
      </main>
    </div>
    );

}

export default Layout;