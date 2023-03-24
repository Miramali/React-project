import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import icon from "./images/startup.svg";


import {Container, Row, Col} from 'react-bootstrap';
import './banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-brands-svg-icons';
import {Link, Button} from 'react-scroll';


function Banner(){
const [text]= useTypewriter({
    words: ['Front End Developper','Backend Developper','FullStack Developer'],
    loop:3,
    typeSpeed: 120,
    deleteSpeed: 50

});
    return (
        <section className='banner ' id="home">
        <Container >
            
        <Row className=" text-align-center  ">
            <Col className=" col-md-6 col-md-offset-3  mt-5 text-white " xs={12} md={6} xl={7}>
            <div className="part1 pb-sm-2 pt-sm-1 " >
                <span className='but col-12' >You find every thing in my portofolio</span>
                <h2 className='text-align-center text'>
                <p className='intro '>I'M Madiha Kharoubi, {''}</p>
                <p>Computer Science Eng,</p>
                <p>Living in Algeria,<span id="cl"> {text}</span><span><Cursor cursorStyle="<" /></span> </p>

               
                
            </h2>
            <p className='ptext'>Hello, 11 years of experience in management, junior in front End Developping</p>
            <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            targetId="projects"
           to="projects"
            
                    
            
            activeClassName="selected">
            <button className='connect btn pt-sm-0 mt-sm-0 '>Let's Connect <span><i class="fa-regular fa-circle-right"></i></span></button></Link>
            </div>
            </Col>
            <Col className="columns mt-5" xs={12} md={6} xl={5}>
                <div className='part1'>
            <img  className="me"  src={icon} alt='portofolio' />
            
            </div>
            </Col>
            </Row>
           

        </Container>
        </section>
    )

} export default Banner;