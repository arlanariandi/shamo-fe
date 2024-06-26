import axiosInstance from "../api/axiosInstance.js";

const AuthService = () => {
    const TOKEN_KEY = 'token'

    const login = async (user) => {
        try {
            const {data} = await axiosInstance.post('/api/login', user)
            return data
        } catch (e) {
            alert('Login failed: ' + (e.response?.data?.message || e.message));
            throw e
        }
    }

    const register = async (user) => {
        const {data} = await axiosInstance.post('/api/register', user);
        return data;
    }

    const logout = () => {
        sessionStorage.removeItem('token')
    }

    const getUserInfo = async () => {
        const {data} = await axiosInstance.get('/api/user')
        return data
    }

    const getTokenFromStorage = () => {
        return sessionStorage.getItem(TOKEN_KEY)
    }

    return {
        login,
        register,
        logout,
        getUserInfo,
        getTokenFromStorage
    }
}

export default AuthService
