import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, userOrders } from "../store/usersReducer";
import AddButton from "./AdminButtons/AddButton";
import SeeUsersButton from "./SadminButtons/SeeUsersButton.jsx";
import "../index.css";
import PendingOrdersButton from "./SadminButtons/PendingOrdersButton";
import AddCatergory from "./AdminButtons/AddCaterory";


export default function Naxvbar() {
  const user = useSelector((state) => state.users.loggedIn);
  const dispatch = useDispatch();
  const userId = user ? user.id : null;
  const userStatus = user ? user.isAdmin : null;
  const cartId = useSelector((state) => state.cart.cartData.id);

  return (
    <>
      <Navbar bg="primary" id="navCss" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c1c9ae6e-bf1f-417c-b9b6-80d425a3a207/ddgdagc-f75ecd4d-21b8-4cfb-a120-b0beda6a69d2.png/v1/fill/w_1280,h_1279,strp/steam_verde_by_brastertag_ddgdagc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3OSIsInBhdGgiOiJcL2ZcL2MxYzlhZTZlLWJmMWYtNDE3Yy1iOWI2LTgwZDQyNWEzYTIwN1wvZGRnZGFnYy1mNzVlY2Q0ZC0yMWI4LTRjZmItYTEyMC1iMGJlZGE2YTY5ZDIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9fKkRdt5qUwmFZWI8BEACDZuyDTX6g9aaK_7a-AqKdA"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Brand>Steam Green</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                className="btn btn-outline-success text-white text-decoration-none"
                to="/"
              >
                Products
              </Link>
            </Nav.Link>
            <Nav.Link>
              {userId ? null : (
                <span>
                  <Link
                    to={`/login`}
                    className="btn btn-outline-primary text-white text-decoration-none"
                  >
                    Login
                  </Link>
                  /
                  <Link
                    to={`/register`}
                    className="btn btn-outline-primary text-white text-decoration-none"
                  >
                    Register
                  </Link>
                </span>
              )}
            </Nav.Link>
          </Nav>
          {userId ? (
            <NavDropdown
              title={user ? `Hola ${user.name}` : null}
              id="navbarScrollingDropdown"
              style={{ background: "white !important" }}
            >
              <NavDropdown.Item>
                <Link to={`/profile/edit/${user.email}`}>My Profile</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/orders"
                  onClick={() => {
                    dispatch(userOrders(user.id));
                  }}
                >
                  Orders history
                </Link>
              </NavDropdown.Item>
              {userStatus === "Admin" || userStatus === "SAdmin" ? (
                <AddButton />
              ) : null}
              {userStatus === "Admin" || userStatus === "SAdmin" ? (
                <AddCatergory />
              ) : null}
              {userStatus === "SAdmin" ? <SeeUsersButton /> : null}
              {userStatus === "SAdmin" ? <PendingOrdersButton /> : null}
              <NavDropdown.Divider />
              <Link to={`/`} onClick={() => dispatch(logoutUser())}>
                <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
              </Link>
            </NavDropdown>
          ) : null}
          <Nav.Link>
            <Link
              className="btn btn-outline-success text-white text-decoration-none"
              to={userId ? `/${userId}/${cartId}` : "/login"}
            >
              🛒
            </Link>
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}
