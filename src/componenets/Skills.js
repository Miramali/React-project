import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {Container, Row, Col} from 'react-bootstrap';
import './skills.css';


import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



function Skills(){
  
    const percentage = [66, 76,86,96];
    

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div className='skills' id="skills">
        <Container >
        <Row >
            <Col className="col-12 ">
            {/* <div className='skills-items'> */}
              <div className='content'>
            <h1> Skills</h1>
            <p>You can see my skills here</p>
            <Carousel   responsive={responsive}  infinite={true}>
            
              
                     <div className='itemOne'>
              <div style={{ width: 180, height: 180 }}>
                <CircularProgressbar value={percentage[0]}
  text={`${percentage[0]}%`} style={{
    text: {
        // Text color
        fill: '#f88',
        // Text size
        fontSize: '16px',
       
      },
      background: {
        fill: '#5d0f67',
      },
      
      
  }} />
  
                 </div>
                 <h5>Web Developement</h5>
                 </div>
               {/* carousel 3 */}
               <div className='itemOne'>
              <div style={{width: 180, height: 180}}>
                <CircularProgressbar value={percentage[1]}
  text={`${percentage[1]}%`} style={{
    text: {
        // Text color
        fill: '#f88',
        // Text size
        fontSize: '16px',
      },
      background: {
        fill: '#5d0f67',
      },
      
  }} /><h5>Technical English</h5>
                 </div>
                 </div>
                {/* carousel 3 */}
                <div className='itemOne'>
              <div style={{ width: 180, height: 180}}>
                <CircularProgressbar value={percentage[2]}
  text={`${percentage[2]}%`} style={{
    text: {
        // Text color
        fill: '#f88',
        // Text size
        fontSize: '16px',
      },
      background: {
        fill: '#5d0f67',
      },
      
  }} />
  
                 </div>
                 <h5>Android App</h5>
                 </div>
                 <div className='itemOne'>
              <div style={{ width: 180, height: 180 }}>
                <CircularProgressbar value={percentage[3]}
  text={`${percentage[3]}%`} style={{
    text: {
        // Text color
        fill: '#f88',
        // Text size
        fontSize: '16px',
      },
      background: {
        fill: '#5d0f67',
      },
      
  }} />
                   </div>
                 <h5>Technical English</h5>
                 </div>
             
        
            </Carousel>
            </div>
            {/* </div> */}
            </Col>
            

        </Row>
           

        
        </Container>
        </div>
    )

} export default Skills;