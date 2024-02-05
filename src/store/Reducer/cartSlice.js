import { createSlice } from "@reduxjs/toolkit";

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
            } else {
                state.cart = [action.payload, ...state.cart];
            }
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((ech) => ech.item.id !== action.payload.id);
        },

        clearCart: (state) => {
            state.cart = [];
        }
    },
});

export const { addToCart, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
