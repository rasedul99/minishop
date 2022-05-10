import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Col xs={12} md={3}>
        <Link to={`product/${id}`}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image} alt={title} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{category}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    );
  });
  return <Row>{renderList}</Row>;
};

export default ProductComponent;
