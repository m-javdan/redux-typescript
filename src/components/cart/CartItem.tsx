import React from "react";
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart-slice.ts";


const CartItem: React.FC<Product> = ({id, image, price, title, quantity}: Product) => {
    const dispatch = useDispatch();

    const addItemToCartHandler = (): void => {
        dispatch(cartActions.addItemToCart({
            title,
            price,
            image,
            quantity
        }))
    }

    const removeItemFromCartHandler = (): void => {
        dispatch(cartActions.removeItemFromCart(id))
    }
    const styleButton: string =
        "border border-black bg-sky-500 hover:bg-sky-600 text-white font-bold py-1 px-3 rounded m-1";

    return (
        <div>
            <li>
                <header>
                    <h3>{title}</h3>
                    <div>{price.toFixed(2)}</div>
                </header>
                <div>
                    <div>
                        <span>{quantity}</span>
                    </div>
                    <div>
                        <button className={styleButton} onClick={addItemToCartHandler}>+</button>
                        <button className={styleButton} onClick={removeItemFromCartHandler}>-</button>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default CartItem;