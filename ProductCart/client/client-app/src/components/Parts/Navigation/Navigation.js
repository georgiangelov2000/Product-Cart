import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../../../actions/auth";
import { PersonFill, Cart } from "react-bootstrap-icons";

const Navigation = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const { user } = auth;

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {user ? (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              Simple Ecommerce
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarsExampleDefault"
            >
              <ul className="navbar-nav m-auto">
                <LinkContainer to="/">
                  <li className="nav-item m-auto">
                    <a
                      className="nav-link"
                      href="index.html "
                      style={{ cursor: "pointer" }}
                    >
                      Home
                    </a>
                  </li>
                </LinkContainer>

                <LinkContainer to="/">
                  <li className="nav-item m-auto">
                    <a className="nav-link" style={{ cursor: "pointer" }}>
                      {user.username}
                    </a>
                  </li>
                </LinkContainer>

                <LinkContainer to="/products">
                  <li className="nav-item">
                    <a className="nav-link" style={{ cursor: "pointer" }}>
                      Products
                    </a>
                  </li>
                </LinkContainer>

                <LinkContainer to="/update-profile">
                  <li className="nav-item">
                    <a className="nav-link" style={{ cursor: "pointer" }}>
                      Update Profile
                    </a>
                  </li>
                </LinkContainer>

                <LinkContainer to="/contacts">
                  <li className="nav-item">
                    <a className="nav-link" style={{ cursor: "pointer" }}>
                      Contacts
                    </a>
                  </li>
                </LinkContainer>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={onLogout}
                  >
                    Logout
                  </a>
                </li>

                <form class="form-inline my-2 my-lg-0">
                  <div class="input-group input-group-sm">
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      placeholder="Search..."
                    />
                    <div class="input-group-append">
                      <button
                        type="button"
                        class="btn btn-secondary btn-number"
                      >
                        <i class="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                  <a class="btn btn-success btn-sm ml-3" href="cart.html">
                    <i class="fa fa-shopping-cart"></i> Cart
                    <span class=" ml-1 badge badge-light"> 0 </span>
                  </a>
                </form>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="index.html">
                Simple Ecommerce
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarsExampleDefault"
              >
                <ul className="navbar-nav m-auto">
                  <LinkContainer to="/">
                    <li className="nav-item m-auto">
                      <a
                        className="nav-link"
                        href="index.html "
                        style={{ cursor: "pointer" }}
                      >
                        Home
                      </a>
                    </li>
                  </LinkContainer>

                  <LinkContainer to="/register">
                    <li className="nav-item">
                      <a className="nav-link" style={{ cursor: "pointer" }}>
                        Register
                      </a>
                    </li>
                  </LinkContainer>

                  <LinkContainer to="/login">
                    <li className="nav-item">
                      <a className="nav-link" style={{ cursor: "pointer" }}>
                        Login
                      </a>
                    </li>
                  </LinkContainer>

                  <LinkContainer to="/products">
                    <li className="nav-item">
                      <a className="nav-link" style={{ cursor: "pointer" }}>
                        Products
                      </a>
                    </li>
                  </LinkContainer>

                  <LinkContainer to="/contacts">
                    <li className="nav-item">
                      <a className="nav-link" style={{ cursor: "pointer" }}>
                        Contacts
                      </a>
                    </li>
                  </LinkContainer>
                </ul>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Navigation;
