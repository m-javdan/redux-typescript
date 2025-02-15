import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [] as Product[],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(
            state: { items: Product[]; totalQuantity: number; },
            action: { payload: any; type: string; }): void {
            const newItem = action.payload;
            const existingItems = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItems) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    category: newItem.category,
                    description: newItem.description,
                    totalPrice: newItem.price,
                    image: newItem.image,
                    title: newItem.title,
                });
            } else {
                state.totalQuantity++;
                existingItems.totalPrice = existingItems.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(
            state: { items: Product[]; totalQuantity: number },
            action: { payload: any; type: string; }): void {
            const id = action.payload;
            const existingItems = state.items.find(item => item.id === id);
            if (!existingItems) {
                return;
            }
            state.totalQuantity--;
            if (existingItems.totalQuantity && existingItems.totalQuantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                state.totalQuantity--;
                existingItems.totalPrice = (existingItems.totalPrice || 0 ) - existingItems.price;
            }
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;