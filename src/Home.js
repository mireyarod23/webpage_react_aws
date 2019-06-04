import React from 'react'
import { Jumbotron } from './components/Jumbotron';
import { Container, Image, Row, Col } from 'react-bootstrap';
import link from './assets/lin.png';
import google_plus  from './assets/google-plus.png';

export const Home = () => (
    <div>
    <Jumbotron/>
    {/* <Container>
        <Row>
            <Col sm>
            <h1>Skills</h1>
            </Col>
            <Col sm>
                <p> I have a diverse set of skills, ranging from working with micro-controllers and electical engineering to 
                            creating native mobile application, all the way to working with 3D artist developing interactivity in 3D enviroments.   
                </p>
                <div className="text-center">
                            <Image src={link} width="50"></Image>
                            <Image src={google_plus} width="50"></Image>
                        </div>
            </Col>
            <Col sm>
                <h4>Contact</h4>
                <p> 
                    email: mireya.rod23@gmail.com
                </p>
            </Col>
        </Row>
    </Container> */}
 </div>
)
