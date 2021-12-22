import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getDateTime } from "./helpers";

const INITIAL_FORM_DATA = {
  productName: "",
  productImg: "",
};

export default function UpdateProduct({ setUpdating, data }) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleCancel = () => {
    setUpdating(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldFormData) => ({
      ...oldFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData(INITIAL_FORM_DATA);
    setUpdating(false);
  };

  return (
    <Card className="bg-white">
      <Row>
        <Col xs={3}>
          <Card.Img
            src={
              "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png"
            }
            variant="center"
            style={{ height: "100%", width: "100%" }}
          />
        </Col>
        <Col className="d-flex flex-column justify-content-between p-3">
          <Form onSubmit={handleSubmit}>
            <Card.Body className="py-1">
              <Form.Control
                className="my-1"
                type="text"
                placeholder="Name"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                required
              />
              <Form.Control
                className="my-1"
                type="text"
                placeholder="Image"
                name="productImg"
                value={formData.productImg}
                onChange={handleChange}
              />
              <Card.Text className="my-2 mx-1">{data.description}</Card.Text>
              <footer className="blockquote-footer mx-1 my-0">
                Created At: {getDateTime(data.creationTime)}
              </footer>
            </Card.Body>
            <Container className="d-flex justify-content-end">
              <Button type="submit" className="m-1" variant="primary">
                Add
              </Button>
              <Button className="m-1" variant="danger" onClick={handleCancel}>
                Cancel
              </Button>
            </Container>
          </Form>
        </Col>
      </Row>
    </Card>
  );
}
