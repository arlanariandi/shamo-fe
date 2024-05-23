import AuthService from "./AuthService.js";
import ProductService from "./ProductService.js";

const ServiceFactory = () => {
    return {
        authService: AuthService(),
        productService: ProductService(),
    }
}

export default ServiceFactory;
