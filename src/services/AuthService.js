import axiosInstance from "../api/axiosInstance.js";

const AuthService = () => {
    const TOKEN_KEY = 'token';

    const login = async (user) => {
        const {data} = await axiosInstance.post('http://127.0.0.1:8000/api/login', user)
        return data
    }

    const logout = () => {
        sessionStorage.removeItem('token')
    }

    const getUserInfo = async () => {
        const {data} = await axiosInstance.get('http://127.0.0.1:8000/api/user')
        return data
    }

    const getTokenFromStorage = () => {
        return sessionStorage.getItem(TOKEN_KEY)
    }

    return {
        login,
        logout,
        getUserInfo,
        getTokenFromStorage
    }
}

export default AuthService
