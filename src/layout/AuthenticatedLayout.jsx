import {Outlet, useNavigate} from "react-router-dom";
import Sidebar from "../component/Sidebar.jsx";
import {useContext, useEffect} from "react";
import authService from "../services/AuthService.js";
import {useDispatch} from "react-redux";
import {ServiceContext} from "../context/ServiceContext.jsx";
import {authAction} from "../slices/authSlice.js";

function AuthenticatedLayout() {
    const {authService} = useContext(ServiceContext)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const onGetUserInfo = async () => {
            try {
                const userInfo = await authService.getUserInfo()
                if (userInfo) {
                    dispatch(authAction(() => userInfo))
                } else {
                    navigate('/login')
                }
            } catch (err) {
                navigate('/login')
            }
        }
        onGetUserInfo()
    }, [authService, dispatch, navigate]);


    return (
        <div className="flex">
            <Sidebar/>
            <main className="flex-grow">
                <Outlet/>
            </main>
        </div>
    )
}

export default AuthenticatedLayout
