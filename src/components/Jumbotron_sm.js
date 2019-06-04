import React from 'react';
import  { BrowserRouter as Router, Route, Switch, Link  } from 'react-router-dom';
import { Jumbotron as Jumbo, Container, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import projImage from '../assets/Asset_2.png';
import meImage from '../assets/me.jpg';


const Styles = styled.div`
  .jumbo {
    background: url(${projImage}) no-repeat fixed bottom;
    background-size: cover;
    background-color: #1A2349;
    color: white;
    position: relative;
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



export const Jumbotron_sm = (props) => (

    <Styles>
    <Jumbo fluid className="jumbo" > 
      <div className="overlay" bg="dark" ></div>
      <Container className="vertical-center">
        <h1><b>{props.className}</b></h1>
      </Container>
    </Jumbo>
    </Styles>


)

