import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  InputGroup,
  FormControl,
  Button,
  DropdownButton,
  Dropdown,
  Container,
  Row,
  Col,
  Card,
  CardGroup,
  Form,
  NavDropdown,
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getAllGames, searchGames, byCategory } from "../store/gamesReducer";
import { useNavigate } from "react-router";
import { getCategories } from "../store/actions/categoryActions";
import AnimatedTitles from './AnimatedTitles';

export default function ListOfProducts() {
  const [selectCategory, setSelectCategory] = useState("Categories");
  const games = useSelector((state) => state.games.allGames);
  const categories = useSelector((state) => state.allcategories.categories);
  const dispatch = useDispatch();
  let newTitle;

  const [searchInput, setSearchInput] = React.useState("");
  let history = useNavigate();

  useEffect(() => {
    dispatch(getAllGames());
    dispatch(getCategories());
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(searchGames(searchInput));
    setSearchInput("");
    history.push(`/search/${searchInput}`);
  };

  const dropDownHandler = (eventKey, event) => {
    event.persist();
    const value = event.target.innerText;
    newTitle = value;

    if(value==="All Categories"){
      history.push(`/`)
    }else{ dispatch(byCategory(value));
      history.push(`/search/${value}`);}
    
  };
  

    let style = {width: "18rem"}
  return (
    <>
      <AnimatedTitles value="List of Games"></AnimatedTitles>
      <Container >
        <Row>
          <Col className="mt-1 mb-1">
            <Form onSubmit={searchHandler}>
              <InputGroup>
                <FormControl
                  placeholder="Search Games"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  type="search"
                  onChange={(e) => setSearchInput(e.target.value)}
                  value={searchInput}
                  required
                />
                <Button variant="outline-secondary" id="button-addon2">
                  🔎
                </Button>
              </InputGroup>
            </Form>
          </Col>
          <Col md="auto mt-1 mb-1">
            <DropdownButton
              id="dropdown-basic-button"
              title={selectCategory ? selectCategory : "Categories"}
              onSelect={dropDownHandler}
            >
             <Dropdown.Item> All Categories</Dropdown.Item>
              <NavDropdown.Divider />
              {categories?.map(({ id, name }) => (
                <Dropdown.Item onClick={() => {
                  setSelectCategory(name);
                }} key={id}>{name}</Dropdown.Item>
                //  <Link></Link>
              ))}
            </DropdownButton>
          </Col>
          <Col md="auto mt-1 mb-1">
          </Col>
        </Row>
      </Container>
      
      <Container className="mt-3 mb-3">
        <CardGroup>
          <Row xs={1} md={4} className="g-4">
            {/* --------------MAP------------ */}

            {games && games.length ? (
              games &&
              games.map((game, i) => {
                return (
                  <Col key={i}>
                    <Link
                      to={`/products/${game.id}`}
                      className="text-decoration-none text-black"
                    >
                      <Card className="h-100 products" style={games.length === 1 ? style : null} >
                        <Card.Img variant="top" src={game.image}/>
                        <Card.Body>
                          <Card.Title>{game.name}</Card.Title>
                          <Card.Text>Released: {game.released}</Card.Text>
                          <Card.Text>Rating: {game.rating}</Card.Text>
                          <Card.Text>Price: ${game.price}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">
                            <Button as="input" type="button" value="info" />
                          </small>
                        </Card.Footer>
                      </Card>
                    </Link>
                  </Col>
                );
              })
            ) : (
              <Container>
                <Row>
                  <h2 className="text-center mt-3 mb-3">
                    Sorry we didn't find any results matching this search
                  </h2>
                </Row>
              </Container>
            )}
          </Row>
        </CardGroup>
      </Container>
    </>
  );
}
