import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
        <Container>
        <Navbar.Brand className='text-dark' as={Link} to="/">Weattle...</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-dark' href="home#services">Services</Nav.Link>
            <Nav.Link className='text-dark' href="home#experts">Experts</Nav.Link>
            <Nav.Link className='text-dark' as={Link} to="/blogs">Blogs</Nav.Link>
            </Nav>
          <Nav>
            <Nav.Link className='text-dark' as={Link} to="/login">Login</Nav.Link>
            <Nav.Link className='text-dark'  href="#signin">
              Sign In
            </Nav.Link>
            <Nav.Link className='text-dark' as={Link} to="/about">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;