import React, {useEffect, useState} from "react";
import {fetchProducts} from "./components/API/FetchApiProduct.tsx";
import Products from "./components/shop/Products.tsx";
import Layout from "./components/layout/Layout.tsx";
import './App.css'
import {useSelector} from "react-redux";
import {RootState} from "./store/store.ts";
import Cart from "./components/cart/Cart.tsx";

const App: React.FC = () => {
    const [products, setProducts] = useState<any>([]);
    const cartIsVisibleToggle: boolean = useSelector((state: RootState): boolean => state.ui.cartIsVisible)

    useEffect(() => {
        const getProducts = async (): Promise<void> => {
            try {
                const fetchedProducts: Product[] = await fetchProducts();
                setProducts(fetchedProducts);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, [])

    return (
        <>
            <Layout>
                {cartIsVisibleToggle && <Cart/>}
                <Products products={products}/>
            </Layout>
        </>
    )
}

export default App
