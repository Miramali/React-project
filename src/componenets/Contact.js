import React from 'react';
import {Container, Row, Col,Form,Button} from 'react-bootstrap';
import contact from './images/bok.jpg'
// import { useState } from 'react';
import './contact.css';
import jolie from "./images/Reading e-book.png";



 function Contact (){
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }

    return (
        <section  className='contacts ' id="contacts">
         

         
        <Container className="mb-5 mt-0 ">
          <Row>
            <Col size={12} md={6}>
            
               <img   className='form-pic mt-3' src={jolie} alt="form pic"></img>
            </Col>
            <Col  size={12} md={6}className="mb-5 mt-5">
            
           
        <h2 >Get In Touch</h2>
        <div className='form mb-5'>
      <form  className='form' onSubmit={onSubmit}>
       
          <Row>
            <Col className="mb-3 px-1" size={12} md={6}>
            <input className="form-control" placeholder='First Name' type="text" id="name" required />
            </Col>
            <Col className="mb-3 px-1" size={12} md={6}>
            <input className="form-control" placeholder='Last Name' type="text" id="name" required />
            </Col>
      

          </Row>
         
          <Row>
          <Col className="mb-3 px-1" size={12} md={6}>
          
          <input className="form-control" placeholder='Phone' type="text" id="phone" required />
        
          </Col>
          <Col className="mb-3 px-1" size={12} md={6}>
          <input className="form-control" placeholder='Email' type="email" id="email" required />

          </Col>
        
          </Row>
          <Row  className="mb-3 px-1" size={12}>
           
            
          <textarea className="form-control"  rows="5" id="message"  placeholder='Type Your Message here' required />
      

            
            </Row>
            <Row>
            <Col className="mb-3">
            
            <button className="btn btn-danger " type="submit">
          {formStatus}
        </button>
        
  
              </Col>
          </Row>
         
          
          
        
        
      </form>
      </div>
      </Col>
      
          </Row>


        </Container>
        
        
        
        </section>

    )
} export default Contact;