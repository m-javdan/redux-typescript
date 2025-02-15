import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [] as Product[],
        totalQuantity: 0,
        quantity: 0,
    },
    reducers: {
        addItemToCart(
            state: { items: Product[]; totalQuantity: number; },
            action: { payload: any; type: string; }): void {
            const newItem: any = action.payload;
            const existingItems: Product | undefined = state.items.find(item => item.id === newItem.id);
            if (!existingItems) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    category: newItem.category,
                    description: newItem.description,
                    totalPrice: newItem.price,
                    image: newItem.image,
                    title: newItem.title,
                    quantity: 1,
                })
            } else {
                state.totalQuantity++;
                existingItems.totalPrice = existingItems.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(
            state: { items: Product[]; totalQuantity: number },
            action: { payload: number; type: string; }
        ): void {
            const id: number = action.payload;

            const existingItem: Product | undefined = state.items.find(
                (item: Product): boolean => item.id === id
            );
            state.totalQuantity--;
            if (!existingItem) {
                return;
            }
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(
                    (item: Product): boolean => item.id !== id
                );

            } else {
                state.totalQuantity--;
                existingItem.totalPrice = (existingItem.totalPrice || 0) - existingItem.price;
            }
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;