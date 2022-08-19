import React, { useRef } from 'react';
import {Button,Form} from 'react-bootstrap';
//import { Formik, Field, Form } from 'formik';
import emailjs from "emailjs-com";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        
    };

    return (

        <div className='container container-contact'>


            <h2> Contact</h2>
            <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="name" name="name" placeholder="Name" />
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Email" />
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                    <Form.Control as="textarea" name="message" rows={5} placeholder="Message" />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">
                    Send Message
                </Button>
            </Form>



        </div>
    );
}
export default Contact;