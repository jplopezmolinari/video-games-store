import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { editGame } from '../store/gamesReducer';

export default function EditGameForm() {
  const gameDetails = useSelector((state) => state.games.singleGame);
  const {
    id,
    name,
    released,
    image,
    rating,
    platforms,
    price,
    description,
    stock,
    categories,
  } = gameDetails;

  const categoriesName = categories.map((catg) => {
    return catg.name;
  });
  const [body, setBody] = useState({
    name,
    released,
    image,
    rating,
    platforms,
    price,
    description,
    stock,
    category: categoriesName,
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
        let value = e.target.value;
        let categories = value.trim();
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
    console.log(body);
    e.preventDefault();
    let gameId = id;
    dispatch(editGame({ gameId, body }));
    setTimeout(() => history.push('/'), 2000);
  };

  return (
    <div>
      <>
        <Container className="mr-3 margin-top">
          <h1 className="text-center mt-3 mb-3">Edit Product</h1>

          <Row className="mt-3 mb-3">
            <Col></Col>
            <Col xs={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Group className="mb-1">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="New Name"
                    value={body.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Label>Released date</Form.Label>
                <Form.Group className="mb-1">
                  <Form.Control
                    type="text"
                    name="released"
                    placeholder="Year Released"
                    value={body.released}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Label>Image</Form.Label>
                <Form.Group className="mb-1">
                  <Form.Control
                    type="text"
                    name="image"
                    placeholder="Give me an Url of an image!"
                    value={body.image}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Label>Rating</Form.Label>
                <Form.Group className="mb-1">
                  <Form.Control
                    type="text"
                    name="rating"
                    placeholder="Use integer numbers "
                    value={body.rating}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Label>Platforms</Form.Label>
                <p>Previous data: {platforms.join(', ')} </p>
                <p>
                  <strong>¡Important!</strong> Make sure to re-write the
                  previous value here! (if you want them to persist)
                </p>
                <Form.Group className="mb-1">
                  <Form.Control
                    type="text"
                    name="platforms"
                    placeholder="Available on platforms ..."
                    // value={body.platforms}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Label>Price</Form.Label>
                <Form.Group className="mb-1">
                  <Form.Control
                    type="number"
                    name="price"
                    placeholder="price"
                    value={body.price}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Label>Categories</Form.Label>
                <p>Previous data: {categoriesName.join(', ')} </p>
                <p>
                  <strong>¡Important!</strong> Make sure to re-write the
                  previous value here! (if you want them to persist)
                </p>
                <Form.Group className="mb-1">
                  <Form.Control
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
                    name="description"
                    as="textarea"
                    rows={3}
                    value={body.description}
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
