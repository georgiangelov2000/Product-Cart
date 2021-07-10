import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../../../components/AuthorizedUsers/CheckoutSteps/CheckoutSteps"
import { saveShippingAddress } from "../../../actions/cart";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };

  return (
    <Form onSubmit={onSubmit}>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1> 
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          placeholder="Enter address"
          size="sm"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
        <Form.Text className="text-muted">Please Enter address</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          name="city"
          placeholder="Enter city"
          size="sm"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <Form.Text className="text-muted">Please Enter city</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Postal Code</Form.Label>
        <Form.Control
          type="text"
          name="postalCode"
          placeholder="Enter postalCode"
          size="sm"
          onChange={(e) => setPostalCode(e.target.value)}
          value={postalCode}
        />
        <Form.Text className="text-muted">Please Enter postalCode</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Country</Form.Label>
        <Form.Control
          type="text"
          name="country"
          placeholder="Enter country"
          size="sm"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />
        <Form.Text className="text-muted">Please Enter country</Form.Text>
      </Form.Group>

      <Button type="submit" variant="primary">
        Continue
      </Button>
    </Form>
  );
};

export default ShippingScreen;
