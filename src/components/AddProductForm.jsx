import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addGame } from '../store/gamesReducer';
import AnimatedTitles from './AnimatedTitles';

export default function AddProductForm() {
  const [body, setBody] = useState({
    name: '',
    released: '',
    image: '',
    rating: 0,
    platforms: [],
    price: 0,
    description: '',
    stock: 10,
    category: [],
  });

  const dispatch = useDispatch();
  const history = useNavigate();

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setBody({ ...body, name: e.target.value });
        return;
      case 'released':
        setBody({ ...body, released: e.target.value });
        return;
      case 'image':
        setBody({ ...body, image: e.target.value });
        return;
      case 'rating':
        setBody({ ...body, rating: e.target.value });
        return;
      case 'platforms':
        if (e.target.value.length <= 2) return;
        let platformsNames = e.target.value.trim();
        let splited = platformsNames.includes(',')
          ? platformsNames.split(', ')
          : platformsNames.split(' ');

        let array = splited.map((platf) => {
          return platf[0].toUpperCase() + platf.slice(1).toLowerCase();
        });
        setBody({ ...body, platforms: array });
        return;
      case 'price':
        setBody({ ...body, price: e.target.value });
        return;
      case 'description':
        setBody({ ...body, description: e.target.value });
        return;
      case 'categories':
        if (e.target.value.length <= 2) return;
        let categories = e.target.value.trim();
        let splitedCatg = categories.includes(',')
          ? categories.split(', ')
          : categories.split(' ');

        let catgArr = splitedCatg.map((catg) => {
          return catg[0].toUpperCase() + catg.slice(1).toLowerCase();
        });
        setBody({ ...body, category: catgArr });
        return;
      default:
        setBody({});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addGame(body));
    setTimeout(() => history.push('/'), 1500);
  };

  return (
    <div>
      <>
        <Container className="mr-3 margin-top">
          <AnimatedTitles value="Product Info"></AnimatedTitles>

          <Row className="mt-3 mb-3">
            <Col></Col>
            <Col xs={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-1">
                  <Form.Control
                    required={true}
                    type="text"
                    name="name"
                    placeholder="VideoGame name"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-1">
                  <Form.Control
                    required={true}
                    type="text"
                    name="released"
                    placeholder="Year Released"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-1">
                  <Form.Control
                    required={true}
                    type="text"
                    name="image"
                    placeholder="Give me an Url of an image!"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Control
                    required={true}
                    type="text"
                    name="rating"
                    placeholder="Use integer numbers "
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Control
                    required={true}
                    type="text"
                    name="platforms"
                    placeholder="Available on platforms ..."
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Control
                    required={true}
                    type="number"
                    name="price"
                    placeholder="price"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Control
                    required={true}
                    type="text"
                    name="categories"
                    placeholder="categories"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    required={true}
                    name="description"
                    as="textarea"
                    rows={3}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3 mb-3">
                  Submit
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
