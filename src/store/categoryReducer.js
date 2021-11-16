import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories, byCategory, newCategory, editCategory, deleteCategory } from "./actions/categoryActions";

const initialState = {
  categories: [],
  newCategory: ''
};

const categoryReducer = createReducer(initialState, {
  [getCategories.fulfilled]: (state, action) => {
    state.categories = action.payload;
  },
  [newCategory.fulfilled]: (state, action)=> {
    console.log('action.payload', action.payload);
    state.newCategory = action.payload
  },
  [editCategory.fulfilled]: (state, action)=> {
    console.log('action.payload', action.payload);
  },
  [deleteCategory.fulfilled]: (state, action)=> {
    console.log('action.payload', action.payload);
  }


});

export default categoryReducer;
