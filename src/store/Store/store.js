// store.js
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Reducer/userSlice";
import cartSlice from "../Reducer/cartSlice";

const store = configureStore({
    reducer: {
        userStore: userSlice,
        cartStore: cartSlice,
    },
});

export default store;
