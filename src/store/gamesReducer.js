import axios from "axios";
import {
  createAsyncThunk,
  createReducer,
  createAction,
} from "@reduxjs/toolkit";
import { message } from "antd";

const clearGames = createAction("CLEAR_GAMES");

export const getAllGames = createAsyncThunk("GET_ALL_GAMES", () => {
  return axios.get("http://localhost:3001/api/videoGames").then((r) => r.data);
});

export const getSingleGame = createAsyncThunk("GET_SINGLE_GAME", (gameId) => {
  return axios
    .get(`http://localhost:3001/api/videoGames/${gameId}`)
    .then((r) => r.data);
});

export const searchGames = createAsyncThunk('SEARCH_GAMES', (searchInput) => {
  return axios
    .get(`http://localhost:3001/api/search?search=${searchInput}`)
    .then((r) => r.data);
});

export const editGame = createAsyncThunk("EDIT_GAME", ({gameId, body}) => {
  return axios
    .put(`http://localhost:3001/api/videoGames/edit/${gameId}`, body)
    .then((r) => r.data);
});

export const addGame = createAsyncThunk("ADD_NEW_GAME", (body) => {
  return axios
    .post(`http://localhost:3001/api/videoGames/newGame`, body)
    .then((r) => console.log(r.data));
});

export const deleteGame = createAsyncThunk("DELETE_GAME", (gameId) => {
  return axios
    .delete(`http://localhost:3001/api/videoGames/remove/${gameId}`)
    .then((r) => console.log(r.data));
});

export const byCategory = createAsyncThunk("BY_CATEGO", (categoName) => {
  return axios
    .get(`http://localhost:3001/api/search/category?selected=${categoName}`)
    .then((r) => r.data);
});


const allGamesReducer = createReducer(
  { allGames: [], singleGame: {} },
  {
    [clearGames]: (state, action) => {
      state.allGames = action.payload;
    },
    [getAllGames.fulfilled]: (state, action) => {
      state.allGames = action.payload;
    },
    [getAllGames.pending]: (state, action) => {
      message.loading({
        content: "Loading products...",
        className: "custom-class",
        style: {
          marginTop: "30vh",
        },
        duration: 1,
      });
    },
    [getSingleGame.fulfilled]: (state, action) => {
      state.singleGame = action.payload;
    },
    [searchGames.fulfilled]: (state, action) => {
      state.allGames = action.payload;
    },
    [searchGames.pending]: (state, action) => {
      message.loading({
        content: 'Loading games...',
        className: 'custom-class',
        style: {
          marginTop: '30vh',
        },
        duration: 3,
      });
    },
    [searchGames.rejected]: (state, action) => state,
    [addGame.fulfilled]: (state, action) => {
      message.success("Added succesfully");
    },
    [addGame.pending]: (state, action) => {
      message.loading({
        content: "Adding, give me one second...",
        className: "custom-class",
        style: {
          marginTop: "30vh",
        },
        duration: 1,
      });
    },
    [addGame.rejected]: (state, action) => {
      message.error("Something went wrong, try again ;)");
    },
    [editGame.fulfilled]: (state, action) => {
      message.success("Updated succesfully!");
    },
    [deleteGame.fulfilled]: (state, action) => {
      message.success("Success!");
    },
    [byCategory.fulfilled]: (state, action)=> {
      state.allGames = action.payload[0].videogames
    }
  }
);

export default allGamesReducer;
