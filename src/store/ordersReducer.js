import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";

export const createOrder = createAsyncThunk("CREATE_ORDER", ({ userId }) => {
  return axios
    .post(`http://localhost:3001/api/orders/${userId}`, {})
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log("catch", e);
    });
});

export const getPendingOrders = createAsyncThunk("GET_PENDING", () => {
  return axios
    .get(`http://localhost:3001/api/orders/seePending`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log("catch", e);
    });
});

export const confirmOrder = createAsyncThunk("CONFIRM_ORDER", (orderId) => {
  return axios
    .put(`http://localhost:3001/api/orders/toConfirm/${orderId}`, {
      status: "complete",
    })
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log("catch", e);
    });
});

export const rejectOrder = createAsyncThunk("REJECT_ORDER", (orderId) => {
  return axios
    .put(`http://localhost:3001/api/orders/toConfirm/${orderId}`, {
      status: "rejected",
    })
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log("catch", e);
    });
});

const initialState = {
  pendingOrders: [],
};

const ordersReducer = createReducer(initialState, {
  [createOrder.fulfilled]: (state, action) => {
    message.success("Ready! Now you can see your orders historial")
  },
  [createOrder.pending]: (state, action) => {
    message.loading("I'm creating your order, wait a moment", 5)
  },
  [getPendingOrders.fulfilled]: (state, action) => {
    state.pendingOrders = action.payload;
  },
  [confirmOrder.fulfilled]: (state, action) => {
    console.log(action.payload);
  },
  [rejectOrder.fulfilled]: (state, action) => {
    console.log(action.payload);
  },
});

export default ordersReducer;
