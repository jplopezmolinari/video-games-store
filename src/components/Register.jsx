import React, { useState, useEffect } from 'react';
import { Row, Container, Col, Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../store/usersReducer';
// import validator from 'validator';

function Register() {
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  let history = useNavigate();

  const onRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(registerForm));
    // Si se registro con exito, se envia a la pagina de Login para que ingrese.
    history.push('/login');
  };

  const onChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  return (
    <Container className="mr-3 margin-top">
      <h1 className="text-center mt-3 mb-3">Register</h1>

      <Row className="mt-3 mb-3">
        <Col></Col>
        <Col xs={6}>
          <Form onSubmit={(e) => onRegister(e)}>
            <Form.Group className="mb-2" controlId="formBasicName">
              <Form.Control
                type="name"
                name="name"
                placeholder="Enter your Name"
                onChange={onChangeRegister}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={onChangeRegister}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={onChangeRegister}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3 mb-3">
              Create Account
            </Button>
            <p className="mt-1 mb-3">
              If you already have an account
              <Link to={`/login`}> CLICK HERE </Link> to access your account.
            </p>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Register;
