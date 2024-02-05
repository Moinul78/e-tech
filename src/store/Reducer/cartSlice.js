import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cart.find((ech) => ech.id === newItem.id);

            if (existingItem) {
                state.cart = state.cart.map((ech) =>
                    ech.id === newItem.id ? action.payload : ech
                );
                toast.error("Item already in cart");
            } else {
                state.cart = [action.payload, ...state.cart];
                toast.success("Item Added into cart!!");
            }
        },
        removeCartItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },

        clearCart: (state) => {
            state.cart = [];
        }
    },
});

export const { addToCart, removeCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
