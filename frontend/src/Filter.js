import React from "react";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";

export default function Filter({ setFilter }) {
  const handleChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  return (
    <Container className="p-0">
      <FormControl
        placeholder="Search by product name"
        onChange={handleChange}
      />
    </Container>
  );
}
