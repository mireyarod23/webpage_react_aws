import React from 'react';
import { Container, Row, Col, Image, Media, Button } from 'react-bootstrap';
import styled from 'styled-components';
import rangerGlove from './assets/Ranger_Glove.jpg';
import climate from './assets/Climate_P.png';
import batOwl from './assets/Bat_Owl.png';
import radation_img from './assets/radiation.png';
import { Jumbotron_sm } from './components/Jumbotron_sm';
import Holder from 'holderjs'

const Styles = styled.div`
  img {
      max-width: 30%;
      height: auto;
  }
  .media {
      padding-top:20px;
      padding-bottom:20px;
  }
  .featurette-divider {
    border: 0.5px solid;
    color:#DAD9D8;
    }
`;

export const Projects = () => (
    <div>
    <Jumbotron_sm className="Projects"/>
    <Styles>
    <Container>
    
  <ul className="list-unstyled">
  <Media as="li">
    <Media.Body>
    <h2>Virtual Reality Glove</h2>
      <p>
      The Ranger Glove is my thesis project, an attempt to create a virtual reality glove that allows a natural exploration in a virtual reality environment while also being affordable and open source.
       All the components are off-the-shelf, allowing anyone to built and create a vitual reality glove. The Ranger Glove is using an MIT License. 
      </p>
      <Button variant="secondary" href="https://github.com/mireyarod23/RangerGlove">Github Repository</Button>
    </Media.Body>
      <Image
      bsPrefix
       fluid
      className="ml-3"
      rounded
      src={rangerGlove}
      thumbnail
    />

  </Media>
    <div className="featurette-divider"></div>
  <Media as="li">
    <Image
       width={300}
   
      className="mr-3"
      fluid
      bsPrefix
      src="holder.js/300x300?text=In Developement"
    />
    <Media.Body>
      <h2>Bandelier National Monument Tour App </h2>
      <p>
      In development Bandelier National Monument tour application. Utilizing Vuforia SDK for augmented reality programmed in Unity Game Engine.
      </p>
    </Media.Body>
  </Media>
  <div className="featurette-divider"></div>
  <Media as="li">
  <Media.Body>
    <h2>Climate Perspective</h2>
      <p>
      Machine learning interactive installation using MEAN Stack installed at the Bradbury Science Museum at Los Alamos called Climate Perspective.
      </p>
      <Button variant="secondary" href="https://www.lanl.gov/museum/exhibitions/research-gallery/climate-perspectives-about.php">Bradbury Science Museum</Button>
    </Media.Body>
      <Image
          width ={500}
      bsPrefix
       fluid
      className="ml-3"
      rounded
      src={climate}
      thumbnail
    />
  </Media>
  <div className="featurette-divider"></div>
  <Media as="li">
    <Image
     width ={500}
      bsPrefix
      fluid
     rounded
      className="mr-3"
 
      src={batOwl}
    />
    <Media.Body>
      <h2>Owls and Bats of Los Alamos </h2>
      <p>
      Incorporated owl and bat calls in interactive app for an exhibit opened in September 2014
        Multi-Platform application developed in HTML5 and JavaScript and wrapped in PhoneGap to deploy in IOS.
      </p>
    </Media.Body>
  </Media>
  <div className="featurette-divider"></div>
  <Media as="li">
  <Media.Body>
    <h2>Radiation Knowledge</h2>
      <p>
        Designed and programmed a Radiation Knowledge game. Programmed in C# using Unity game engine. This application is currently
        installed at the Bradbury Science Museum.
      </p>
    </Media.Body>
      <Image
          width ={500}
      bsPrefix
       fluid
      className="ml-3"
      rounded
      src={ radation_img}
      thumbnail
    />
  </Media>
</ul>

</Container>
</Styles>
</div>
 
)