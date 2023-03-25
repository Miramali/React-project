
import {React} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  './navigation.css';
import { useState,useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {BrowserRouter as Router, Routes, Route,useNavigate} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Banner from './Banner';
import Skills from './Skills';
import Project from './Project';
import { HashLink } from 'react-router-hash-link';

import {Link, Button} from 'react-scroll';
// import ScrollButton from 'react-scroll-button';





function Navigation() {
    // const [activ, setActiv]= useState('home');
    const [navig, setNavig]= useState(false);
  
    const changeNavbar= ()=>{
      console.log(window.scrollY);
      if(window.scrollY>=60){
        setNavig(true)
      } else{
        setNavig(false);
      }

    };
    window.addEventListener('scroll',changeNavbar);
    // .;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  
  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  return (
    <div className='navigation'>
      <Router>
    
     
    <Navbar className={navig? "text-center my-custom-navbar active": "text-center my-custom-navbar"} expand="lg"   fixed='top'>
      <Container>
        <Navbar.Brand className='brand' href="#home">Mad<span>i7a</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav ">
          <span className='navbar-toggler-icon custum-nav mb-3'></span></Navbar.Toggle> 
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto mt-1">
            <Link 
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            style={{ textDecoration: 'none' }}
            to="home"
            activeClassName="selected">

          <Nav.Link  >Home</Nav.Link></Link>
         
            <Link 
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            style={{ textDecoration: 'none' }}
            to="skills"
            activeClassName="selected">
            
            <Nav.Link  >Skills</Nav.Link></Link>
            
            <Link 
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            style={{ textDecoration: 'none' }}
            to="projects"
            
            activeClassName="selected">
            <Nav.Link>Projects</Nav.Link></Link>
                     
           
          </Nav>
          
          <div className=' navbar-text  d-flex justify-content-center text-align-center mt-1'>
            <div className='social-icons mt-4'>
          
                    <a href='https://www.facebook.com/'  target={"a_blank"} alt="facebook"><FontAwesomeIcon className='dd' icon={faFacebookF} /></a>
                    <a href='https://www.youtube.com/watch?v=oHmz42qRfho' target={"a_blank"}  alt="LinkIn"><FontAwesomeIcon className='dd' icon={faTwitter} /></a>
                    <a href='https://www.linkedin.com/in/mad-dz-95a204261' src={''}  target={"a_blank"}alt="Twitter"><FontAwesomeIcon className='dd' icon={faLinkedinIn} /></a>
                    
                    </div>
                
                
                <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            style={{ textDecoration: 'none' }}
            targetId="news"
           to="news"
            
                    
            
            activeClassName="selected">
                <button    className='letsConnect bn1 mt-1'>let's Connect</button></Link>
              {/* <a href="/contact"> <button  className='letsConnect bn1 mt-1'>let's Connect</button> </a> */}
              
              </div>
                
                
                

            
            
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
         
    </Router>
    
     
    </div>
   
         
   
   
  );
 
}

export default Navigation;