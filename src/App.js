
import React from "react";
import Navi from "./components/nav/Nav";
import About from "./components/about/About";
import {Row,Col} from "reactstrap";



function App() {
  return (
    <div className="App" >
      <Row>
        <Col md="3"><Navi/></Col>
        <Col md="9"><About/></Col>

      </Row>
          
          
    </div>
  );
}

export default App;
