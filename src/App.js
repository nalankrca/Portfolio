import { Route,Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from './components/contact/Contact';
import React from "react";
import Layout from "./components/nav/Layout";


function App() {
  return (
    <div className="App" >
      
      
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/home"  element={<Home/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/contact" exact element={<Contact/>} />
      </Route>
      </Routes> 



    </div>
);
}

export default App;
