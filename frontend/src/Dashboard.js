import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Products from "./Products";
import Add from "./Add";
import Filter from "./Filter";
import Sort from "./Sort";
import { fetchProducts } from "./api";

export default function Dashboard() {
  const [productsData, setProductsData] = useState(null);
  const [filter, setFilter] = useState("");
  const [addProduct, setAddProduct] = useState(false);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    fetchProducts().then((res) => setProductsData(res));
  }, []);

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
        productsData={productsData}
        filter={filter}
        direction={direction}
        setAddProduct={setAddProduct}
        setProductsData={setProductsData}
        addProduct={addProduct}
      />
    </Container>
  );
}
