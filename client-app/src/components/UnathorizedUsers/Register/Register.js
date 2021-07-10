import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../actions/auth";
import Spinner from "../../../assets/Spinner";

const Register = ({ history }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, user } = userRegister;

  const { username, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (user) {
      history.push("/cart");
    } else {
      history.push("/login");
    }
    setFormData("");
  }, [history, user]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData === null) {
      console.log("error");
    } else {
      dispatch(register(username, email, password));
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Row>
          <Col xs={6} className="m-auto">
            <Form onSubmit={onSubmit} className="text-center mt-2">
              <h1>Register Form</h1>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  size="sm"
                  onChange={onChange}
                  value={username}
                />
                <Form.Text className="text-muted">
                  Please Enter username
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  size="sm"
                  onChange={onChange}
                  value={email}
                />
                <Form.Text className="text-muted">
                  Please Enter email address
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={onChange}
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  size="sm"
                />
                <Form.Text className="text-muted">
                  Please Enter password
                </Form.Text>
              </Form.Group>

              <Button variant="primary" block size="sm" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Register;
