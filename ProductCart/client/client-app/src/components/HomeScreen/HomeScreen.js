import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/products";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../Product/Product";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const listOfProducts = useSelector((state) => state.getProducts);
  const { loading, error, products } = listOfProducts;
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Container>
      <Row className="mt-5">
        {products == null ? (
          <h1>Loading....</h1>
        ) : (
          <>
            {products.map((product) => (
              <Col className="mb-4" key={product.id}  sm={12} md={6} lg={4} xl={4} >
                <Product product={product} />
              </Col>
            ))}
          </>
        )}
      </Row>
    </Container>
  );
};

export default HomeScreen;
