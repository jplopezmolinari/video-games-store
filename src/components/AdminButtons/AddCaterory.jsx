import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown, InputGroup, SplitButton, FormControl, Dropdown } from "react-bootstrap";

export default function AddCatergory() {
    
  return (
    <>
      <NavDropdown.Item>
        <Link to="/create/newCategory">Category Panel</Link>
      </NavDropdown.Item>
    </>
  );
}
