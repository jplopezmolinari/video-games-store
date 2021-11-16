import axios from "axios";
import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import { message } from "antd";

export const addProductToCart = createAsyncThunk(
  "ADD_PRODUCT_TO_CART",
  ({ gameId, userId }) => {
    return axios
      .post(`http://localhost:3001/api/cart/addCart/${gameId}/${userId}`, {
        quantity: 1,
      })
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log("catch", e);
      });
  }
);

export const cartView = createAsyncThunk("CART_VIEW", ({ cartId, userId }) => {
  return axios
    .get(`http://localhost:3001/api/cart/singleCart/${cartId}/${userId}`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log("catch", e);
    });
});

export const deleteFromCart = createAsyncThunk(
  "DELETE_FROM_CART",
  ({ gameId, userId }) => {
    return axios
      .delete(
        `http://localhost:3001/api/cart/deleteProduct/${gameId}/${userId}`
      )
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log("catch", e);
      });
  }
);

export const increaseProductCart = createAsyncThunk(
  "INCREASE_PRODUCT_CART",
  ({ gameId, userId }) => {
    return axios
      .put(`http://localhost:3001/api/cart/increaseProduct/${gameId}/${userId}`)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log("catch", e);
      });
  }
);

export const decreaseProductCart = createAsyncThunk(
  "DECREASE_PRODUCT_CART",
  ({ gameId, userId }) => {
    return axios
      .put(`http://localhost:3001/api/cart/decreaseProduct/${gameId}/${userId}`)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log("catch", e);
      });
  }
);

export const clearCart = createAction("CLEAR_CART");

const initialState = {
  cartData: {},
  singleCart: {},
};

const cartReducer = createReducer(initialState, {
  [addProductToCart.fulfilled]: (state, action) => {
    state.cartData = action.payload;
    message.success("Product added to cart", 1);
  },
  [cartView.fulfilled]: (state, action) => {
    state.singleCart = action.payload;
  },
  [deleteFromCart.fulfilled]: (state, action) => {
    state.cartData = action.payload;
  },
  [increaseProductCart.fulfilled]: (state, action) => {
    state.singleCart = action.payload;
  },
  [decreaseProductCart.fulfilled]: (state, action) => {
    state.singleCart = action.payload;
  },
  [clearCart]: (state, action) => {
    state.cartData = {};
    state.singleCart = {};
  },
});

export default cartReducer;