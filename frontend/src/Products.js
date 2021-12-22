import React from "react";
import Container from "react-bootstrap/Container";
import ProductCard from "./ProductCard";
import NewProduct from "./NewProduct";

export default function Products({
  data,
  filter,
  direction,
  addProduct,
  setAddProduct,
}) {
  return (
    <Container className="d-flex flex-column justify-content-center p-0 gap-3">
      {addProduct && <NewProduct setAddProduct={setAddProduct} />}
      {data
        .filter((product) => product.productName.toLowerCase().includes(filter))
        .sort(
          (a, b) =>
            direction &&
            (direction === "ascending"
              ? b.creationTime - a.creationTime
              : a.creationTime - b.creationTime)
        )
        .map((filteredProduct) => (
          <ProductCard key={filteredProduct.id} data={filteredProduct} />
        ))}
    </Container>
  );
}
