import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../store/usersReducer';

export default function UserEdit() {
  const user = useSelector((state) => state.users.loggedIn);
  const { name, email, password } = user;
  const [body, setBody] = useState({
    name,
    email,
    password,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(body);
    switch (e.target.name) {
      case 'name':
        setBody({ ...body, name: e.target.value });
        return;
      case 'email':
        setBody({ ...body, email: e.target.value });
        return;
      case 'password':
        if (e.target.value === ' ' || e.target.value.length === 0) {
          delete body.password;
          return;
        }
        setBody({ ...body, password: e.target.value });
        return;
      default:
        setBody({});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser({ email, body }));
  };

  return (
    <div>
      <>
        <Container className="mr-3 margin-top">
          <h1 className="text-center mt-3 mb-3">My Profile</h1>

          <Row className="mt-3 mb-3">
            <Col></Col>
            <Col xs={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Group className="mb-1">
                  <Form.Control
                    type="text"
                    name="name"
                    value={body.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Label>Email</Form.Label>
                <Form.Group className="mb-1">
                  <Form.Control
                    type="email"
                    name="email"
                    value={body.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Label>Password</Form.Label>
                <Form.Group className="mb-1">
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter your new password or re-write it to keep it "
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3 mb-3">
                  Edit
                </Button>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </>
    </div>
  );
}
