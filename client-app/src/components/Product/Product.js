import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }} className="my-3 p-3 rounded">
      <Card.Img src={product.image} variant="top" />
      <Card.Body>
        <Card.Title>
          <span className="text-secondary">{product.name} </span>
        </Card.Title>
        <Card.Text>
          <strong>Price: {product.price}</strong>
        </Card.Text>
        <Card.Text>
          <strong>Rating: {product.rating}</strong>
        </Card.Text>
        <Card.Text>
          <Col xs={12} className="p-0">
            <Button variant="outline-primary">Add to cart</Button>{" "}
          </Col>
          <>
            <hr />
          </>
          <Col xs={12} className="p-0">
            <Link to={`/product/${product.id}`}>
              <Button variant="outline-dark">Details</Button>
            </Link>
          </Col>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
