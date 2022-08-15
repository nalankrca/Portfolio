import React from "react";
import Progress from "./Progress";
import {Col, Row} from 'react-bootstrap';

const ProgressInfo = () =>{
    const programmingUI=[
        {
            id:1,
            title:'Reactjs',
            now:35
        },
        {
            id:2,
            title:'JavaScript',
            now:40
        },
        {
            id:3,
            title:'HTML & CSS',
            now:35
        },
        {
            id:4,
            title:'C',
            now:55
        },
        {
            id:5,
            title:'Python',
            now:60
        },
        {
            id:6,
            title:'Sql Server',
            now:65
        }

    ]


    return(

        <div>
                <br/>
       <br/>

            <section  className="container-progress">
                <h2 >Programming Skills</h2>
                <Row>  
                   {programmingUI.map((info)=>(
                   <Col md={6}  >
                     <Progress
                     title={info.title}
                     now={info.now}
                    />
                   </Col>
                     )) }
                    
                 </Row>
            </section>


 {/**           <Progress
            title={programming[1].title}
            now={programming[1].now}
            />
            <Progress
            title={programming[2].title}
            now={programming[2].now}
            />
            <Progress
            title={programming[3].title}
            now={programming[3].now}
            />*/}  
            
            
        </div>
    );


}

export default ProgressInfo;
