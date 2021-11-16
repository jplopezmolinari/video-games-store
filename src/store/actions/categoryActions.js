import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk("ALL_CATEGOS", () => {
  return axios.get("http://localhost:3001/api/categories/").then((r) => r.data);
});

export const byCategory = createAsyncThunk("BY_CATEGO", (categoName) => {
  return axios
    .get(`http://localhost:3001/api/search/category?selected=${categoName}`)
    .then((r) => r.data);
});

export const newCategory = createAsyncThunk("NEW_CATEGO", (category) => {
  return axios
    .post("http://localhost:3001/api/categories/create", {
      name: category.name,
    })
    .then((r) => r.data);
});

export const editCategory = createAsyncThunk("EDIT_CATEGO", ({idCategory, input}) => {
  return axios
    .put(`http://localhost:3001/api/categories/edit/${idCategory}`, {
      name: input,
    })
    .then((r) => r.data);
});
export const deleteCategory = createAsyncThunk("DELETE_CATEGO", (idCategory) => {
  return axios
    .delete(`http://localhost:3001/api/categories/delete/${idCategory}` )
    .then((r) => r.data);
});


