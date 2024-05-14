import AuthService from "./AuthService.js";

const ServiceFactory = () => {
    return {
        authService: AuthService()
    }
}

export default ServiceFactory
