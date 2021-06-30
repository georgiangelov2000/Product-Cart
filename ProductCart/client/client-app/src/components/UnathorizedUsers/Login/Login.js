import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../actions/auth";
import Spinner from "../../../assets/Spinner";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { user, loading } = auth;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (user) {
      history.push("/dashboard");
    }
    setFormData("");
  }, [history, user]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData === null) {
      console.log("error");
    } else {
      dispatch(login(email, password));
    }
  };

  return (
    <Form className="text-center mt-2" onSubmit={onSubmit}>
      <h1>Login Form</h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={onChange}
          name="email"
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted"> Please login email</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={onChange}
          name="password"
          type="password"
          placeholder="Password"
        />
        <Form.Text className="text-muted"> Please login password</Form.Text>
      </Form.Group>
      <Button variant="primary" block size="sm" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
