import { configureStore } from "@reduxjs/toolkit";
import allGamesReducer from "./gamesReducer";
import usersReducer from "./usersReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./ordersReducer";
import reviewReducer from "./reviewReducer";
import categoryReducer from "./categoryReducer";

const store = configureStore({
  reducer: {
    games: allGamesReducer,
    users: usersReducer,
    cart: cartReducer,
    orders: orderReducer,
    allcategories: categoryReducer,
    reviews: reviewReducer,
  },
});

export default store;
