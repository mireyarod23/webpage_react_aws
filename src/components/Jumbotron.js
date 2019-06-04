import React from 'react';
import { Jumbotron as Jumbo, Container, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import projImage from '../assets/Asset_2.png';
import meImage from '../assets/me_2.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${projImage}) no-repeat fixed top;
    background-size: cover;
    background-color: #1A2349;
    color: white;
    height:100vh;
    position: relative;
  }

  .vertical-center {
    min-height: 80%;  /* Fallback for browsers do NOT support vh unit */
    min-height: 80vh; /* These two lines are counted as one :-)       */
  
    display: flex;
    align-items: center;
  }
  .img-fluid {
      max-height: 73%;
  }

  .des-cont {
      color: #EAEAEA;
  }

  .colm {
    padding-top:30px;
  }
`;


export const Jumbotron = () => (
    <Styles>
    <Jumbo fluid className="jumbo" > 
      <div className="overlay" bg="dark" ></div>
      <Container className="vertical-center">
        <Row>
            <Col xs={6} md={4}>
                <Image src={meImage} roundedCircle />
            </Col>
            <Col xs={10} md={6} className="colm">
                <p>Hi, my name is</p>
                <h1><b>Mireya Rodriguez</b></h1>
                <p>I am a <big><b>software developer</b></big>, innovator, self-starter, and quick-learner. 
                    I am passionate about <big><b>innovative technologies </b></big> and learning new ways of implemenation. 
                    I have  <big><b>5+ year </b></big>of experience developing mobile, web, and game applications.
                </p>
            </Col>
        </Row>
      </Container>
    </Jumbo>
    </Styles>


)

