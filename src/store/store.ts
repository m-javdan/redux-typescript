import {configureStore} from '@reduxjs/toolkit';
import cartSlice from "./cart-slice.ts";
import uiSlice from "./slice.ts";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        ui: uiSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;