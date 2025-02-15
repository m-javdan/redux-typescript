import React from "react";

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import {uiAction} from "../../store/slice.ts";

const CartButton: React.FC = () => {
    const dispatch = useDispatch();
    const cartQuantity: number = useSelector((state: RootState) => state.cart.totalQuantity);

    const toggleCartHandler = (): void => {
        dispatch(uiAction.toggle())
    }

    return (
        <button onClick={toggleCartHandler}>
            <span className="p-2 cursor-pointer">My Cart</span>
            <span>{cartQuantity}</span>
        </button>
    )
}

export default CartButton