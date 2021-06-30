import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand className="text-white" href="#home">George Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto text-white">
            <LinkContainer className="text-white" to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer className="text-white" to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer className="text-white" to="/login">
              <Nav.Link >Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
