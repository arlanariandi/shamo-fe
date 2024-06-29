import axiosInstance from "../api/axiosInstance.js";

const ProductService = () => {
    const fetchProducts = async () => {
        const {data} = await axiosInstance.get('/api/products');
        return data;
    }

    const fetchProductById = async (id) => {
        try {
            const {data} = await axiosInstance.get('/api/products', {
                params: {id}
            });
            return data;
        } catch (err) {
            console.error("Failed to fetch product by ID:", err);
            throw err;
        }
    }

    return {
        fetchProducts,
        fetchProductById,
    }
}

export default ProductService;
