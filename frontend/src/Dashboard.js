import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Products from "./Products";
import Add from "./Add";
import Filter from "./Filter";
import Sort from "./Sort";

const data = [
  {
    id: 1,
    productName: "Some Product Name",
    description: "Some description about a product",
    creationTime: 1640188731482,
  },
  {
    id: 2,
    productName: "Some Longer Product Name",
    description: "Some description about a product",
    creationTime: 1640288751462,
  },
  {
    id: 3,
    productName: "Some Extremely Long Product Name",
    description: "Some description about a product",
    creationTime: 1640184721782,
  },
  {
    id: 4,
    productName: "Some Name",
    description: "Some description about a product",
    creationTime: 1140188731282,
  },
  {
    id: 5,
    productName: "Some Product Name",
    description: "Some description about a product",
    creationTime: 1643188737282,
  },
  {
    id: 6,
    productName: "Some Product Name",
    description: "Some description about a product",
    creationTime: 1660188751482,
  },
  {
    id: 7,
    productName: "Some Product Name",
    description: "Some description about a product",
    creationTime: 1240186731482,
  },
  {
    id: 8,
    productName: "Some Product Name",
    description: "Some description about a product",
    creationTime: 1610128731482,
  },
];

export default function Dashboard() {
  const [filter, setFilter] = useState("");
  const [addProduct, setAddProduct] = useState(false);
  const [direction, setDirection] = useState(null);

  return (
    <Container
      className="p-5 bg-white d-flex flex-column gap-2"
      style={{ maxWidth: "1000px" }}
    >
      <Container className="p-0 d-flex">
        <Filter setFilter={setFilter} />
        <Container className="p-0 d-flex justify-content-end">
          <Add setAddProduct={setAddProduct} />
          <Sort setDirection={setDirection} />
        </Container>
      </Container>
      <Products
        data={data}
        filter={filter}
        direction={direction}
        setAddProduct={setAddProduct}
        addProduct={addProduct}
      />
    </Container>
  );
}
