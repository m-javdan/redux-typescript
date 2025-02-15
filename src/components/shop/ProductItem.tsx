import React from "react";
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart-slice.ts";
import Card from "../cart/Card.tsx";

const ProductItem: React.FC<Product> = ({category, description, id, image, price, title}: Product) => {
    const dispatch = useDispatch();

    const addItemToCartHandler = (): void => {
        dispatch(cartActions.addItemToCart({
            category,
            description,
            image,
            price,
            title
        }))
    }

    const removeItemFromCartHandler = (): void => {
        dispatch(cartActions.removeItemFromCart(id))
    }

    const styleButton: string =
        "border border-black cursor-pointer bg-sky-500 hover:bg-sky-600 text-white font-bold py-1 px-3 rounded m-1";

    return (
        <li>
            <Card>
                <ul className='border shadow rounded-md'>
                    <img className="w-full h-50" src={image} alt={title}/>
                    <div className="p-3">
                        <h3>{title}</h3>
                        <p className='line-clamp-1'>{description}</p>
                        <span>{category}</span>
                        <h4>{price.toFixed(2)}</h4>
                    </div>
                    <button className={styleButton} onClick={addItemToCartHandler}>+</button>
                    <button className={styleButton} onClick={removeItemFromCartHandler}>-</button>
                </ul>
            </Card>
        </li>
    )
}

export default ProductItem;