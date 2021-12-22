import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function Sort({ setDirection }) {
  const handleClick = (direction) => {
    setDirection(direction);
  };

  return (
    <DropdownButton className="mx-1" variant="secondary" title="Sort by ">
      <Dropdown.Item onClick={() => handleClick("ascending")}>
        Time &#8595;
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleClick("descending")}>
        Time &#8593;
      </Dropdown.Item>
    </DropdownButton>
  );
}
