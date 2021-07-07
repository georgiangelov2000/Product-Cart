import React from "react";
import { Card, Button } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
       <Card.Img src={product.image} variant='top' />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{`${product.numReviews} reviews`}</Card.Text>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
