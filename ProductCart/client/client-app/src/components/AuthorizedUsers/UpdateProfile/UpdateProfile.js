import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserDetails } from "../../../actions/auth";
import { Form, Button, Row, Col } from "react-bootstrap";

const UpdateProfile = ({ history }) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userDetails = useSelector((state) => state.userDetails);
  const { currentUser } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  useEffect(() => {
    if (!user) {
      history.push("/login");
    } else {
      if (!currentUser.username) {
        dispatch(getUserDetails("profile"));
      } else {
        setUsername(currentUser.username);
        setEmail(currentUser.email);
      }
    }
  }, [dispatch, history, user, currentUser]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (username == null || email == null) {
      console.log("error");
    } else {
      dispatch(updateUserDetails({ id: user._id, username, email,password }));
    }
  };

  return (
    <Row>
      <Col xs={6} className="m-auto">
        <Form className="text-center mt-2" onSubmit={onSubmit}>
          <h1>Update Profile</h1>

          <Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={onSubmit}>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              size="sm"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              size="sm"
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              size="sm"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" block size="sm" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default UpdateProfile;
