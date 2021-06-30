import React from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <Form className="text-center mt-2">
      <h1>Login Form</h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">Enter email address</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">Enter password</Form.Text>
      </Form.Group>
      <Button variant="primary" block size="sm" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
