import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <Navbar bg="black" variant="black">
          <Container>
          <Navbar.Brand href="#home">Doctor's-Care</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink exact to="/home">Home</NavLink>
            <NavLink to="/our">Our Doctor's</NavLink>
            <NavLink to="/patient">Patient Service's</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
          </Nav>
          <Nav className='me-2px'>
          <Button style={{marginRight:"15px"}}>Login</Button>
          <Button>Register</Button>
          </Nav>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;