import React from 'react'
import { Container, Card, CardColumns, Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';
import { Jumbotron_sm } from './components/Jumbotron_sm';

const Styles = styled.div`
  img {
      max-width: 30%;
      height: auto;
  }
  .card {
      height: 380px;
  }
  .card-columns .card{
      margin-bottom:30px;
  }

  .card-text {
    margin-left:20px;
  }
  .card-header{
      background-color:#1A2349;
      color:white;
  }

  li {
    list-style-type: circle;
  }
  .featurette-divider {
    border: 0.5px solid;
    color:#DAD9D8;
    }

    .jumbotron{
        background-color:white;
    }
`;


export const Skills = () => (
    <div>
        <Jumbotron_sm className="Technical Skills"/>
    <Styles>
        <Jumbo fluid>
        <Container className="text-center"> 
            <h1>Overview</h1>
            <p>
            I have a diverse set of skills, ranging from working with micro-controllers and electical engineering to 
                            creating native mobile application, all the way to working with 3D artist developing interactivity in 3D enviroments.   
            </p>
        </Container>
        </ Jumbo>
        <Container>
            <CardColumns>
               <Card >
               <Card.Header className="text-center"><b>Programming Languages</b></Card.Header>
                    <Card.Body>
                    <Card.Text>
                       <li>C#</li>
                       <li>Javascript</li>
                       <li>Swift</li>
                       <li>Java (Android Dev)</li>
                       <li>Python</li>
                       <li>SQL</li>
                       <li>PHP</li>
                       <li>HTML5</li>
                       <li>XML</li>
                       <li>JSON</li>
                       <li>CSS</li>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card >
                <Card.Header className="text-center"><b>Frameworks</b></Card.Header>
                    <Card.Body>      
                    <Card.Text>
                        <li>Angular JS</li>
                        <li>Express JS</li>
                        <li>Swift</li>
                        <li>Bootstrap</li>
                        <li>Node JS</li>
                        <li>React JS</li>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card >
                <Card.Header className="text-center"><b>Database</b></Card.Header>
                    <Card.Body>
                    <Card.Text>
                    <li>SQLite</li>
                    <li>Mongodb</li>
                    <li>Oracle</li>
                    <li>SQL</li>

                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Header className="text-center"><b>Software</b></Card.Header>
                        <Card.Body>
                            <Card.Text>
                            <li>Unity</li>
                            <li>Visual Studio</li>
                            <li>Arduino</li>
                            <li>JIRA</li>
                            <li>Android Studio</li>
                            <li>Tesseract OCR</li>
                            <li>GitHub </li>
                            <li>TOAD</li>
                            <li>SSRS</li>
                            <li>Vuforia SDK</li>
                            <li>Docker</li>
                            <li>TensorFlow</li>

                            </Card.Text>
                    </Card.Body>
                </Card>
                <Card >
                <Card.Header className="text-center"><b>Libraries</b></Card.Header>
                    <Card.Body>
                    <Card.Text>
                        <li>D3.js</li>
                        <li>three.js</li>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card >
                <Card.Header className="text-center"><b>Project Management Software</b></Card.Header>
                    <Card.Body>
                    <Card.Text>
                        <li>JIRA</li>
                        <li>Slack</li>
                        <li>Trello</li>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
        </Container>
    </Styles>
    </div>
)
