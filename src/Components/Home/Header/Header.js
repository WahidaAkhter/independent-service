import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
        <Navbar.Brand className='text-dark' href="#home">Weattle...</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-dark' href="#services">Services</Nav.Link>
            <Nav.Link className='text-dark' href="#about me">About Me</Nav.Link>
            <Nav.Link className='text-dark' href="#blogs">Blogs</Nav.Link>
            </Nav>
          <Nav>
            <Nav.Link className='text-dark' href="#login">Login</Nav.Link>
            <Nav.Link className='text-dark'  href="#signin">
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;