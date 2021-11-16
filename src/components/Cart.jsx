import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import {
  cartView,
  deleteFromCart,
  increaseProductCart,
  decreaseProductCart,
  clearCart,
} from "../store/cartReducer";
import { createOrder } from "../store/ordersReducer";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import AnimatedTitles from "./AnimatedTitles";

function Cart() {
  const location = useLocation();
  const arrayLocation = location.pathname.split("/");
  const cartD = useSelector((state) => state.cart.cartData);
  const singleCart = useSelector((state) => state.cart.singleCart);
  const user = useSelector((state) => state.users.loggedIn);
  const userId = user ? user.id : null;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartView({ cartId: arrayLocation[2], userId: arrayLocation[1] }));
  }, [cartD, singleCart]);

  const decrement = (gameId, userId) => {
    dispatch(decreaseProductCart({ gameId, userId })).then(() =>
      dispatch(cartView({ cartId: arrayLocation[2], userId: arrayLocation[1] }))
    );
  };
  const increment = (gameId, userId) => {
    dispatch(increaseProductCart({ gameId, userId })).then(() =>
      dispatch(cartView({ cartId: arrayLocation[2], userId: arrayLocation[1] }))
    );
  };
  const deleteGame = (gameId, userId) => {
    dispatch(deleteFromCart({ gameId, userId })).then(() =>
      dispatch(cartView({ cartId: arrayLocation[2], userId: arrayLocation[1] }))
    );
  };

  const games = singleCart ? singleCart.videogames : null;

  const handleClick = () => {
    dispatch(createOrder({ userId }));
    dispatch(clearCart());
  };
  return (
    <>
      <div className="container">
        <AnimatedTitles value="Your shopping cart"></AnimatedTitles>
        <div>
          {/*-----------------MAP-------------------- */}
          {games ? (
            games &&
            games.map((game, i) => {
              let gameId = game.id;

              const amountGames = game["cart-videogames"].amountOfGames;
              const stockGames = game.stock;

              return (
                <div key={i}>
                  <div className="card mb-3 card h-100 ">
                    <div className="row g-0 h-100">
                      <div className="col-md-4 ">
                        <img
                          src={game.image}
                          className="img-fluid rounded-start fit-image h-100"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{game.name}</h5>
                          <div
                            class="btn-group"
                            role="group"
                            aria-label="Basic example"
                          >
                            <button
                              type="button"
                              class="btn btn-primary"
                              onClick={() => decrement(gameId, userId)}
                              disabled={amountGames < 2}
                            >
                              -
                            </button>
                            <button type="text" class="btn btn-primary">
                              {game["cart-videogames"].amountOfGames}
                            </button>

                            <button
                              type="button"
                              class="btn btn-primary"
                              onClick={() => increment(gameId, userId)}
                              disabled={amountGames >= stockGames}
                            >
                              +
                            </button>
                          </div>

                          <h6 className="card-text">
                            Subtotal: $
                            {game.price * game["cart-videogames"].amountOfGames}
                            .-
                          </h6>
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => deleteGame(gameId, userId)}
                          >
                            🗑
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h5 className="card-title">No items added yet.</h5>
          )}
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              Quantity: {singleCart ? singleCart.quantity : 0}
            </h5>
            <h4 className="card-title">
              Total Price: ${singleCart ? singleCart.price : 0}
            </h4>

            <Link
              to="/purchaseConfirm"
              className="btn btn-primary"
              onClick={() => handleClick()}
            >
              Buy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
