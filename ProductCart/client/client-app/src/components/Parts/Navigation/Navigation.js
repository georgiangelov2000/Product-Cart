import React, { useState, useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import { Navbar, Nav, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../../../actions/auth";

const Navigation = () => {

  const dispatch =useDispatch()

  const auth = useSelector((state) => state.auth);
  const { user } = auth;

  const onLogout=()=>{
    dispatch(logout());
  };

  return (
    <>
      {user ? (
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand className="text-white">
            George Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto text-white">
              <LinkContainer
                style={{ textTransform: "capitalize" }}
                className="text-white"
                to="/home"
              >
                <Nav.Link>Hello {user.username}</Nav.Link>
              </LinkContainer>

              <LinkContainer className="text-white" to="/home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer className="text-white" to="/dashboard">
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
              <LinkContainer className="text-white" to="/logout">
                  <Button className=""  variant="dark" onClick={onLogout}>
                    Logout
                  </Button>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      ) : (
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand className="text-white">
            George Shop
          </Navbar.Brand>
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
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    </>
  );
};

export default Navigation;
