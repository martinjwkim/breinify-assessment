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
  description: "",
};

export default function NewProduct({ setAddProduct }) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleCancel = () => {
    setAddProduct(false);
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
    console.log({ ...formData, creationTime: Date.now() });
    console.log(getDateTime(Date.now()));
    setFormData(INITIAL_FORM_DATA);
    setAddProduct(false);
  };

  return (
    <Card className="bg-light">
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
                placeholder="Description"
                name="description"
                value={formData.description}
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
