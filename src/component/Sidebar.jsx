import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {ServiceContext} from "../context/ServiceContext.jsx";
import {authAction} from "../slices/authSlice.js";

function Sidebar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {authService} = useContext(ServiceContext)

    const handleLogout = () => {
        if (!confirm('are you sure?')) return
        dispatch(
            authAction(() => {
                authService.logout()
                return null
            })
        )
        navigate('/login')
    }
    return (
        <div className="pr-10 min-h-dvh border-r-2">
            <h2 className="font-bold text-xl">Shamo Dashboard</h2>
            <button
                onClick={handleLogout}
                className="px-4 py-1 text-white bg-red-500 rounded hover:bg-red-800 mt-8">
                logout
            </button>
        </div>
    )

}

export default Sidebar
