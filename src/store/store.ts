import { configureStore } from '@reduxjs/toolkit';
import cartSlice from "./cart-slice.ts";

const store = configureStore({
    reducer: {cart: cartSlice.reducer}
});


export default store;