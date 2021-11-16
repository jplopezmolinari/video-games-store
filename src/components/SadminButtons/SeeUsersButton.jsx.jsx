import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown } from "react-bootstrap";

export default function SeeUsersButton() {
  return (
    <NavDropdown.Item>
      <Link
        to="/users"
      >
         See All Users
      </Link>
    </NavDropdown.Item>
  );
}
