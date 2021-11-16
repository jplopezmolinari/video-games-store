import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown } from "react-bootstrap";

export default function PendingOrdersButton() {
  return (
    <NavDropdown.Item>
      <Link to="/pendingOrders">Show Pending Orders</Link>
    </NavDropdown.Item>
    // <Nav.Link>
    //     <Link
    //         className="btn btn-outline-primary text-white text-decoration-none"
    //         to="/pendingOrders"
    //     >
    //         Show Pending Orders
    //     </Link>
    // </Nav.Link>
  );
}
