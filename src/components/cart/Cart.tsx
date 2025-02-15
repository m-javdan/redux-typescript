import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import Card from "./Card.tsx";
import CartItem from "./CartItem.tsx";

const Cart: React.FC = () => {
    const cartItems: Product[] = useSelector((state: RootState): Product[] => state.cart.items);

    return (
        <Card>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        {...(item as Product)}
                    />
                ))}
            </ul>
        </Card>
    );
};

export default Cart;