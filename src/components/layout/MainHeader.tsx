import React from "react";
import CartButton from "../cart/CartButton.tsx";

const MainHeader: React.FC = () => {
    return (
        <header className="flex w-full bg-stone-500 justify-between items-center p-2">
            <h1 className="border border-black p-1 rounded">Product</h1>
            <nav>
                <ul>
                    <li>
                        <CartButton/>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;