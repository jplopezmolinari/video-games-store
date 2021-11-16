import React, { useEffect } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  setAdmin,
  getUsers,
  removeAdmin,
  deleteUser,
} from "../store/usersReducer";

export default function UsersList() {
  const user = useSelector((state) => state.users.loggedIn);
  const allUsers = useSelector((state) => state.users.allUsers);
  const dispatch = useDispatch();

  const handleSetAdmin = (userId) => {
    dispatch(setAdmin(userId));
  };

  const handleRemoveAdmin = (userId) => {
    dispatch(removeAdmin(userId));
  };

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  useEffect(() => {
    dispatch(getUsers(user.id));
  }, [allUsers]);

  return (
    <>
      {allUsers.length === 0 ? (
        <Alert style={{margin: 15}}variant="success">
          No more users registered besides you!
        </Alert>
      ) : (
        allUsers &&
        allUsers.map((user) => (
          <Card bg="secondary" style={{ margin: 15, color: "white" }}>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.email}</Card.Text>

              {user.isAdmin === "Admin" ? (
                <Button
                  style={{
                    border: "2px solid red",
                    marginRight: 10,
                  }}
                  variant="outline-danger"
                  onClick={() => handleRemoveAdmin(user.id)}
                >
                  Remove Admin Permision
                </Button>
              ) : (
                <Button
                  style={{
                    border: "2px solid green",
                    color: "white",
                    marginRight: 10,
                  }}
                  variant="outline-success"
                  onClick={() => handleSetAdmin(user.id)}
                >
                  Give Admin Permision
                </Button>
              )}
              <Button variant="dark" onClick={() => handleDelete(user.id)}>
                🗑️
              </Button>
            </Card.Body>
          </Card>
        ))
      )}
    </>
  );
}
