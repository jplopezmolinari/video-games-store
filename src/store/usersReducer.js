import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { message } from "antd";

export const registerUser = createAsyncThunk("REGISTER_USER", (newUser) => {
  return axios
    .post("http://localhost:3001/api/users/register", newUser)
    .then((response) => response.data);
});

export const loginUser = createAsyncThunk("LOGIN_USER", (user) => {
  return axios
    .post("http://localhost:3001/api/users/login", user)
    .then((response) => {
      return response.data;
    });
});

export const logoutUser = createAsyncThunk("LOGOUT_USER", () => {
  return axios
    .post("http://localhost:3001/api/users/logout")
    .then((response) => {
      return response.data;
    });
});

export const getUsers = createAsyncThunk("GET_USERS", (userId) => {
  return axios
    .get(`http://localhost:3001/api/users/${userId}`)
    .then((response) => {
      return response.data;
    });
});

export const editUser = createAsyncThunk("EDIT_ME", ({ email, body }) => {
  return axios
    .put(`http://localhost:3001/api/users/${email}`, body)
    .then((response) => {
      return response.data;
    });
});

export const setAdmin = createAsyncThunk("SET_ADMIN", (userId) => {
  return axios
    .put(`http://localhost:3001/api/users/authGiven/${userId}`, {
      isAdmin: "Admin",
    })
    .then((response) => {
      return response.data;
    });
});

export const removeAdmin = createAsyncThunk("REMOVE_ADMIN", (userId) => {
  return axios
    .put(`http://localhost:3001/api/users/authGiven/${userId}`, {
      isAdmin: null,
    })
    .then((response) => {
      return response.data;
    });
});

export const deleteUser = createAsyncThunk("DELETE_USER", (userId) => {
  return axios
    .delete(`http://localhost:3001/api/users/delete/${userId}`)
    .then((response) => {
      return response.data;
    });
});

export const userOrders = createAsyncThunk("GET_ORDERS", (userId) => {
  return axios
    .get(`http://localhost:3001/api/orders/allFrom/${userId}`)
    .then((r) => r.data);
});

const initialState = {
  loggedIn: JSON.parse(localStorage.getItem("user")) || null,
  allUsers: [],
  allOrders: [],
};

const usersReducer = createReducer(initialState, {
  [registerUser.fulfilled]: (state, action) => {
    message.success("¡¡Usuario creado con exito!!", 3);
    return state;
  },
  [registerUser.pending]: (state, action) => {
    message.loading("Estamos creando tu usuario, danos unos segundos...", 1);
  },
  [registerUser.rejected]: (state, action) => {
    message.error("Hubo un error, no pudimos crear tu usuario", 3);
  },
  [loginUser.fulfilled]: (state, action) => {
    localStorage.setItem("user", JSON.stringify(action.payload));
    state.loggedIn = action.payload;
    message.success("¡¡Usuario logueado con exito!!", 3);
    return state;
  },
  [loginUser.pending]: (state, action) => {
    message.loading(
      "Estamos buscando tu usuario en la base de datos. Danos unos segundos...",
      5
    );
    return state;
  },
  [loginUser.rejected]: (state, action) => {
    message.error(
      "Tus datos son incorrectos. Por favor, revisa tu usuario y password",
      3
    );
    return state;
  },

  [logoutUser.fulfilled]: (state, action) => {
    localStorage.removeItem("user");
    state = { ...initialState, loggedIn: false };
    return state;
  },
  [setAdmin.fulfilled]: (state, action) => {
    console.log("Given!");
  },
  [removeAdmin.fulfilled]: (state, action) => {
    console.log("Removed!");
  },
  [getUsers.fulfilled]: (state, action) => {
    console.log(action.payload);
    state.allUsers = action.payload;
  },
  [deleteUser.fulfilled]: (state, action) => {
    console.log("Deleted!");
  },
  [editUser.fulfilled]: (state, action) => {
    message.success("Updated!");
  },
  [editUser.pending]: (state, action) => {
    message.loading("Got it! Give me some seconds", 5);
  },
  [userOrders.fulfilled]: (state, action) => {
    console.log("PAYLOAD DE ORDERS", action.payload);
    state.allOrders = action.payload;
  },
});

export default usersReducer;
