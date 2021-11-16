import React, { useEffect } from 'react';
import {
  Card,
  Container,
  Button,
  Col,
  Row,
  Form,
  FloatingLabel,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleGame } from '../store/gamesReducer';
import { useNavigate, useLocation } from 'react-router';
import { addProductToCart } from '../store/cartReducer';
import EditButton from './AdminButtons/EditButton';
import DeleteButton from './AdminButtons/DeleteButton';
import AnimatedTitles from './AnimatedTitles';
import { Rating } from '@mui/material';

import { message } from 'antd';
import { postReview, getReview } from '../store/reviewReducer';

function ProductDetail() {
  const game = useSelector((state) => state.games.singleGame);
  const user = useSelector((state) => state.users.loggedIn);
  const reviews = useSelector((state) => state.reviews);
  const reviewsParaMap = reviews.reviews;

  const userId = user ? user.id : null;
  const userStatus = user ? user.isAdmin : null;
  let history = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  const pathName = location.pathname;
  const gameId = parseInt(pathName.slice(10));
  const gamePlatforms = game.platforms;
  const gameCategories = game.categories
    ? game.categories.map((catg) => {
        return catg.name;
      })
    : null;

  const [reviewInput, setReviewInput] = React.useState('');
  const [reviewRate, setReviewRate] = React.useState(0);
  let promedio = 0;
  promedio += reviewRate;

  useEffect(() => {
    dispatch(getSingleGame(gameId));
    dispatch(getReview(gameId));
  }, [gameId, reviews]);

  const addGameToCart = (e) => {
    e.preventDefault();

    if (!user) {
      history.push('/login');
      message.warning('You need to be logged in!');
    } else {
      dispatch(addProductToCart({ gameId, userId }));
    }
  };
  const gameName = game.name;
  const addReviewToGame = (e) => {
    e.preventDefault();
    dispatch(postReview({ gameName, gameId, userId, reviewInput, reviewRate }));
  };

  return (
    <Container className=" mt-3 mb-5 pb-5">
      <Row className="mt-3 mb-3">
        <Col>
          <AnimatedTitles value={game.name}></AnimatedTitles>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col></Col>
        <Col xs={6}>
          <Card className="">
            <Card.Img variant="top" src={game.image} />
            <Card.Body>
              <Card.Title>{game.name}</Card.Title>
              <Card.Text>
                Disponible en plataformas:{' '}
                {gamePlatforms ? gamePlatforms.join(', ') : null}{' '}
              </Card.Text>
              <Card.Text>
                Categories: {gameCategories ? gameCategories.join(', ') : null}{' '}
              </Card.Text>
              <Card.Text>{game.description}</Card.Text>
              <Card.Text>Price: ${game.price}</Card.Text>
              <Card.Text>Stock: {game.stock}</Card.Text>
              <Card.Text>Rating: {game.rating}</Card.Text>
              <Card.Text>Released date: {game.released}</Card.Text>
              <Row>
                <Col>
                  <Button
                    className="justify-content-md-center"
                    variant="primary"
                    onClick={(e) => addGameToCart(e)}
                  >
                    Add to Cart
                  </Button>
                </Col>

                <Col>
                  {userStatus === 'Admin' || userStatus === 'SAdmin' ? (
                    <EditButton gameId={gameId} />
                  ) : null}
                </Col>
                <Col>
                  {userStatus === 'Admin' || userStatus === 'SAdmin' ? (
                    <DeleteButton gameId={gameId} />
                  ) : null}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
      {userId ? (
        <Row className="mt-5 mb-5">
          <h4>Add review:</h4>

          <Form onSubmit={addReviewToGame}>
            <Row>
              <h5>Select rating: </h5>
              <Rating
                value={reviewRate}
                onClick={(e) => setReviewRate(e.target.value)}
              />
              <Col></Col>
              <Col></Col>
            </Row>

            <Row>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Leave a comment here"
                className="mt-1 mb-1"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  onChange={(e) => setReviewInput(e.target.value)}
                />
                <Button
                  className="justify-content-md-center mt-2 mb-2"
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </FloatingLabel>
            </Row>
          </Form>
        </Row>
      ) : null}

      <Container>
        <Row className="mt-3 mb-3">
          <h2> Reviews from other customers:</h2>
        </Row>
        <Row className="mt-3 mb-3">
          {/*  ---------MAP REVIEWS------ */}
          {reviewsParaMap && reviewsParaMap.length
            ? reviewsParaMap.map((x, i) => {
                return (
                  <Row className="mb-1 mt-1">
                    <Card key={i}>
                      <Card.Header>Author: {x.user.name} </Card.Header>
                      <Card.Body>
                        <blockquote className="blockquote mb-0">
                          <h>
                            Rating:{' '}
                            <Rating name="read-only" value={x.rate} readOnly />
                          </h>
                          <p>Comments: {x.text}</p>
                        </blockquote>
                      </Card.Body>
                    </Card>
                  </Row>
                );
              })
            : ''}
        </Row>
      </Container>
    </Container>
  );
}

export default ProductDetail;
