import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Container, Row, Col,Button} from 'react-bootstrap';
import './projects.css';
import spider1 from "./images/spi.jpg";
import BackdropFilter from "react-backdrop-filter";



function  ProjectCard() {
  return (
    <div>
        <Container>
           
             <Row className='flex-row '>
              <Col xl="4" md="6" sm="12" >
                <div className='card'>
              
                  <img className='card-img blur' src={spider1}  alt="pic1"></img>
                  <div className='card-body'>
                    <h1 className='card-title'>this is projects</h1>
                    <p className='card-content'>Startup business</p>
                    

                  </div>
                </div>
              </Col>
              <Col xl="4"  md="6" sm="12" >
                <div className='card'>
                  <img className='card-img blur ' src={spider1} alt="pic1"></img>
                  <div className='card-body'>
                    <h1 className='card-title'>this is projects</h1>
                    <p className='card-content '>Web Developement</p>
                    

                  </div>
                </div>
              </Col>
              <Col xl="4" md="6" sm="12">
                <div className='card'>
                  <img className='card-img blur' src={spider1} alt="pic1"></img>
                  <div className='card-body'>
                    <h1 className='card-title'>this is projects</h1>
                    <p className='card-content'>Web developement</p>
                    

                  </div>
                </div>
              </Col>
              <Col xl="4" md="6" sm="12">
                <div className='card'>
                  <img className='card-img blur' src={spider1} alt="pic1"></img>
                  <div className='card-body'>
                    <h1 className='card-title'>this is projects</h1>
                    <p className='card-content'>Startup business</p>
                   
                  </div>
                </div>
              </Col>
              <Col xl="4"  md="6" sm="12">
                <div className='card'>
                  <img className='card-img blur' src={spider1} alt="pic1"></img>
                  <div className='card-body'>
                    <h1 className='card-title'>this is projects</h1>
                    <p className='card-content'>Startup business</p>
                    

                  </div>
                </div>
              </Col>
              <Col xl="4"  md="6" sm="12">
                <div className='card'>
                  <img className='card-img blur' src={spider1} alt="pic1"></img>
                  <div className='card-body'>
                    <h1 className='card-title'>this is projects</h1>
                    <p className='card-content'>Web Business</p>
                  

                  </div>
                </div>
              </Col>
             
            </Row>
  
   
    </Container>
    </div>
  );
}

export default ProjectCard;