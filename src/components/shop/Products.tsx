import ProductItem from "./ProductItem.tsx";

const Products= ({products}:{products: Product[]}) => {
    return (
        <ul className="grid grid-cols-1 m-3 md:grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product: Product) =>
                <ProductItem
                {...product}
                key={product.id}
                />
            )}
        </ul>
    );
};

export default Products
