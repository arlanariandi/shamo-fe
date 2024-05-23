import axiosInstance from "../api/axiosInstance.js";

const ProductService = () => {
    const fetchProducts = async () => {
        const {data} = await axiosInstance.get('/api/products');
        return data;
    }

    return {
        fetchProducts,
    }
}

export default ProductService;
