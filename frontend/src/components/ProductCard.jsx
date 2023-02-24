import React from "react";
import Rating from "./Rating";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function ProductCard({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product.id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Card.Body>
        <Link
          to={`/product/${product.id}`}
          style={{ textDecoration: "none", hover: "none" }}
        >
          <Card.Title as="div">{product.name}</Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            rating={product.rating}
            numReviews={product.numReviews}
            color={"#f8e825"}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
