import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown } from "react-bootstrap";
export default function AddButton() {
  return (
    <NavDropdown.Item>
      <Link to="/create/videoGame/addNew">Add New Product</Link>
    </NavDropdown.Item>
  );
}
