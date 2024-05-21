import {Outlet, useNavigate} from "react-router-dom";
import Sidebar from "../component/Backoffice/Sidebar.jsx";
import {useContext, useEffect} from "react";
import {useDispatch} from "react-redux";
import {ServiceContext} from "../context/ServiceContext.jsx";
import {authAction} from "../slices/authSlice.js";
import Navbar from "../component/Backoffice/Navbar.jsx";

function AuthenticatedLayout() {
    const {authService} = useContext(ServiceContext)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const onGetUserInfo = async () => {
            try {
                const userInfo = await authService.getUserInfo()
                if (!userInfo) {
                    navigate('/login')
                }
                dispatch(authAction(() => userInfo))
            } catch (err) {
                navigate('/login')
            }
        }
        onGetUserInfo()
    }, [authService, dispatch, navigate]);


    return (
        <>
            <Navbar/>
            <Sidebar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default AuthenticatedLayout
