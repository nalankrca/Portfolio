import React from 'react';
import {Button,Form} from 'react-bootstrap';
//import { Formik, Field, Form } from 'formik';

const Contact = () =>{

    return (
        <div className='container container-contact'>


            <h2> Contact</h2>
          <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">  
                    <Form.Control type="name" name="name" placeholder="Name" />
                </Form.Group>
<br/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Email" />
                </Form.Group>
<br/>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                
                 <Form.Control as="textarea" name="message" rows={5} placeholder="Message" />
              </Form.Group>
<br/>  
                <Button variant="primary" type="submit">
                    Send Message
                </Button>
    </Form>



        </div>
    );
}
export default Contact;