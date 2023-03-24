import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



function Footer(){
    return (
        
        <footer className="footer ">
           
            <Container className="footer-content ">
                <Row>
                    <Col lg={6} sm={3}>
                    <h3>Mad<span>i7a</span></h3>
                    </Col>
                    <Col lg={6} sm={6}>
                        
                <div className='social-icon text-center text-sm-end '>
                       
          
                 <a href='https://www.facebook.com/'  alt="facebook"><FontAwesomeIcon className='dd' icon={ faFacebookF} /></a>
                 <a href='#' alt="LinkIn"><FontAwesomeIcon className='dd' icon={faTwitter} /></a>
                 <a href='#' src={''} alt="Twitter"><FontAwesomeIcon className='dd' icon={faLinkedinIn} /></a>
                 </div>
                 </Col>
                 <Col>
       <p className='  po '> @Copyright 2023. All Rights Reserved</p>
      
                        

                    </Col>
             </Row>
            </Container>
        </footer>

    )
}
export default Footer;