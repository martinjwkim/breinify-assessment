import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import UpdateProduct from "./UpdateProduct";
import { getDateTime } from "./helpers";

export default function ProductCard({ data }) {
  const {
    productImg = "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png",
    productName,
    description,
    creationTime,
  } = data;

  const [updating, setUpdating] = useState(false);

  const handleUpdate = () => {
    setUpdating(true);
  };

  const handleDelete = () => {};

  return (
    <>
      {!updating ? (
        <Card className="bg-white">
          <Row>
            <Col xs={3}>
              <Card.Img
                src={productImg}
                variant="center"
                style={{ height: "100%", width: "100%" }}
              />
            </Col>
            <Col className="d-flex flex-column justify-content-between p-3">
              <Card.Body>
                <Card.Title>{productName}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <footer className="blockquote-footer my-2">
                  Created At: {getDateTime(creationTime)}
                </footer>
              </Card.Body>
              <Container className="d-flex justify-content-end">
                <Button
                  className="m-1"
                  variant="primary"
                  onClick={handleUpdate}
                >
                  Edit
                </Button>
                <Button className="m-1" variant="danger" onClick={handleDelete}>
                  Delete
                </Button>
              </Container>
            </Col>
          </Row>
        </Card>
      ) : (
        <UpdateProduct setUpdating={setUpdating} data={data} />
      )}
    </>
  );
}
