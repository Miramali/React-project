import React from 'react';
import {Container, Row, Col,Nav} from 'react-bootstrap';
import './banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-brands-svg-icons'
import './projects.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import ProjectCard from './ProjectCard';
import Skills from './Skills';
import { LinkContainer } from 'react-router-bootstrap';
import {Outlet,Router,Route,Routes} from 'react-router-dom';
import Contact from './Contact';

function Project (){

    return(
        <section className='project text-center  ' id="projects">
           
            <Container>
            <Row className={"justify-content-center"}>
                    <Col className={"nav-justified"} lg={12} md={6}>
            <div className='projects-header' sm={12}>
                    <h1>My Projects</h1>
                    <p>My name is Madiha, from Algeria,this is my list of projects</p></div>
            
                
                
                    <div className='center justify-content-center '>
                                    

                    <Tabs
                    defaultActiveKey="home"
                    id="justify-tab-example"
                   className="mb-3 butt "
                   justify        >
                    <Tab  eventKey="home" title="Home" >
                        <ProjectCard />
                  
                  </Tab>
                 <Tab eventKey="profile" title="Profile"  >
                   <div className='parag'>
                    <p >This is my profile from the edge </p>

                   </div>
                   </Tab>
                <Tab  eventKey="contact" title="Contact" >
                    <Contact  />
        
                 </Tab>
                 </Tabs>
         


                    </div>
                    
                   
                    
                    </Col>
                </Row>

                </Container>
              

           
            </section>

    )
} export default Project;