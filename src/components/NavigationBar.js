import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import NavLink from 'react-bootstrap/NavLink';


const Styles = styled.div`
.NavBar {
 background-color: #1A2349;
}
`;


export const NavigationBar = () =>
(
 <Navbar expand='lg' >
     <Navbar.Brand href="/">Portfolio</Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-navs"></Navbar.Toggle>
     <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Item><Nav.Link href="/Skills" >Techincal Skills</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/Projects" >Projects</Nav.Link></Nav.Item>
            {/* <Nav.Item><Nav.Link href="/Contact" >Contact</Nav.Link></Nav.Item> */}
        </Nav>
     </Navbar.Collapse>

 </Navbar>   
)