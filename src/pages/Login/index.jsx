import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {useContext, useEffect} from "react";
import {ServiceContext} from "../../context/ServiceContext.jsx";
import {authAction} from "../../slices/authSlice.js";
import {useNavigate} from "react-router-dom";

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {authService} = useContext(ServiceContext)

    const {
        values: {email, password},
        handleChange,
        handleSubmit
    } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            dispatch(
                authAction(async () => {
                    const result = await authService.login(values)
                    if (result.meta.code === 200) {
                        sessionStorage.setItem('token', result.data.access_token)
                        navigate('/backoffice');
                    }
                    const resultInfo = await authService.getUserInfo()
                    return resultInfo
                })
            )
        }
    })

    useEffect(() => {
        const onGetUserInfo = async () => {
            const result = await authService.getUserInfo()
            if (result.meta.code === 200) {
                navigate('/backoffice')
            }
        }
        onGetUserInfo()
    }, [authService]);

    return (
        <div>
            <h3 className="mb-5 font-bold">LOGIN</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="email" id="email"
                           className="border-2 px-3 py-1 rounded border-gray-500 mr-3"
                           placeholder="email@mail.com"
                           onChange={handleChange}
                           value={email}
                    />
                    <input type="password" name="password" id="password"
                           className="border-2 px-3 py-1 rounded border-gray-500"
                           placeholder="your password"
                           onChange={handleChange}
                           value={password}
                    />
                </div>
                <button type="submit" className="px-4 py-1 bg-blue-600 mt-5 rounded text-white">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;
