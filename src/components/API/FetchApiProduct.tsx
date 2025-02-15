import axios from 'axios';


export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get(
            'https://fakestoreapi.com/products?limit=8');
        console.log('res', response)

        if (!response.data) {
            throw new Error('Could not fetch cart data!');
        }

        const data = response.data;
        console.log('data', data)

        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};