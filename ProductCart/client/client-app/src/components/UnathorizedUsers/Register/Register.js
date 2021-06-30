import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../actions/auth";
import Spinner from "../../../assets/Spinner";

const Register = ({ history }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { user, loading } = auth;

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const { username, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (user) {
      history.push("/login");
    } else {
      history.push("/register");
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
        <Form onSubmit={onSubmit} className="text-center mt-2">
          <h1>Register Form</h1>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              onChange={onChange}
              value={username}
              placeholder="Enter username"
            />
            <Form.Text className="text-muted">Enter username</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={onChange}
            />
            <Form.Text className="text-muted">Enter email address</Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={onChange}
              type="password"
              name="password"
              value={password}
              placeholder="Password"
            />
            <Form.Text className="text-muted">Enter password</Form.Text>
          </Form.Group>

          <Button variant="primary" block size="sm" type="submit">
            Submit
          </Button>
          
        </Form>
      )}
    </>
  );
};

export default Register;
