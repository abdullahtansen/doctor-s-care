import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../img/logo/dental logo.jpg'
import './Header.css';

const Header = () => {
    return (
        <>
        <Navbar CollapseOnSelect expand="lg" className='nav'>
          <Container>
          <Navbar.Brand href="#home" className="brand"><img className='logo' src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav pt-1">
            <NavLink className="navlink" to="/home">Home</NavLink>
            <NavLink className="navlink" to="/our">Our Doctor's</NavLink>
            <NavLink className="navlink" to="/patient">Patient Service's</NavLink>
            <NavLink className="navlink" to="/blogs">Blogs</NavLink>
            <NavLink className="navlink" to="/about">About</NavLink>
           <NavLink className="navlink" to="/login">
           <Button style={{marginRight:"15px",marginTop:"5px"}}>Login</Button>
           </NavLink>    
           <NavLink className="navlink" to="/register">
           <Button style={{marginRight:"15px",marginTop:"5px"}}>Register</Button>
           </NavLink>    
          </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;