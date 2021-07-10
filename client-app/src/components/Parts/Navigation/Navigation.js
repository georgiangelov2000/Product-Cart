import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../../../actions/auth";
// import { PersonFill, Cart } from "react-bootstrap-icons";

const Navigation = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {user ? (
        <>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Simple Ecommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">
                  <Nav.Link> {user.username}</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <Nav.Link>Cart</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/update-profile">
                  <Nav.Link>Update profile</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contacts">
                  <Nav.Link>Contacts</Nav.Link>
                </LinkContainer>
              </Nav>

              <Nav.Link>
                <Button size="sm" onClick={onLogout}>
                  Logout
                </Button>
              </Nav.Link>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  size="sm"
                />
                <Button size="sm" variant="outline-success">
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </>
      ) : (
        <>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Simple Ecommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contacts">
                  <Nav.Link>Contacts</Nav.Link>
                </LinkContainer>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </>
      )}
    </>
  );
};

export default Navigation;
