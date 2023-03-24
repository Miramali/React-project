import React from "react";
import {Container, Row, Col,Form,Button, InputGroup, FormControl,InputGroupText} from 'react-bootstrap';
import './news.css';


function News(){
    return (
        
        <section className="news " id="news">
           
            <Container className="news-content">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                    <div >
                <h3>See my projects work at once & and leave here your Email Adresse , Please<br></br>  </h3>
               
          
               
            </div>
                    </Col>
                    <Col md={6} xl={7}  xs={12} >
                        <form>
                        <div className="news-email text-align-center">
                  <input   type="email"  placeholder="Email Address" />
                  <button  type="submit text-center">Submit</button>
                </div>
                        </form>
               </Col>
               <Col>
               {/* <div class="pt-site-footer__submit">
               <input type="email" placeholder="Your e-mailadress" />
             <button>LOGIN</button>
</div> */}
</Col>
        
               </Row>
            </Container>
        </section>

    )
}
export default News;