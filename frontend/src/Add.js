import React from "react";
import Button from "react-bootstrap/Button";

export default function Add({ setAddProduct }) {
  const handleClick = () => {
    setAddProduct(true);
  };

  return (
    <Button className="mx-1" variant="success" onClick={handleClick}>
      Add Product
    </Button>
  );
}
