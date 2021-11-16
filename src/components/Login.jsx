import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../store/usersReducer';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function Login() {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const dispatch = useDispatch();
  let history = useNavigate();
  const user = useSelector((state) => state.users);

  const onLogin = async (e) => {
    e.preventDefault();
    await dispatch(loginUser(loginForm));
  };

  useEffect(() => {
    if (user.loggedIn) history.push('/');
  }, [user, history]);

  // }
  const onChangeLogin = (e) => {
    console.log('onChangeLogin e= ', e);
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  return (
    <>
      <Container className="mr-3 margin-top">
        <h1 className="text-center mt-3 mb-3">Login</h1>

        <Row className="mt-3 mb-3">
          <Col></Col>
          <Col xs={6}>
            <Form onSubmit={(e) => onLogin(e)}>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={onChangeLogin}
                />
              </Form.Group>

              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={onChangeLogin}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3 mb-3">
                Login
              </Button>
              <p className="mt-1 mb-3">
                Don't have an account?
                <Link to={`/register`}> CLICK HERE </Link> to create a new one.
              </p>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
