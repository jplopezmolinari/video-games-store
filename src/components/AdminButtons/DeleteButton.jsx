import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { deleteGame } from '../../store/gamesReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

export default function DeleteButton({ gameId }) {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(deleteGame(gameId));
    setTimeout(() => history.push('/'), 1500);
  };

  return (
    <Button
      style={{ marginLeft: 10 }}
      className="justify-content-md-center"
      variant="primary"
      onClick={handleClick}
    >
      Delete product
    </Button>
  );
}
