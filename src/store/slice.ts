import {createSlice} from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {cartIsVisible: false},
    reducers: {
        toggle(state: {cartIsVisible: boolean}): void {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
})

export const uiAction = uiSlice.actions;
export default uiSlice
