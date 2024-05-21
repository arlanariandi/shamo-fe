import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {useContext, useEffect} from "react";
import {ServiceContext} from "../../context/ServiceContext.jsx";
import {authAction} from "../../slices/authSlice.js";
import {NavLink, useNavigate} from "react-router-dom";
import LogoShamo from "../../assets/logo-shamo.png";
import * as Yup from "yup";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {authService} = useContext(ServiceContext);

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
    })

    const {
        values: {email, password},
        handleChange,
        handleSubmit,
        errors,
        touched
    } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: async (values) => {
            dispatch(
                authAction(async () => {
                    const result = await authService.login(values);
                    if (result.meta.code === 200) {
                        sessionStorage.setItem('token', result.data.access_token);
                        navigate('/backoffice');
                    }
                    const resultInfo = await authService.getUserInfo();
                    return resultInfo;
                })
            );
        }
    });

    useEffect(() => {
        const onGetUserInfo = async () => {
            const result = await authService.getUserInfo()
            if (result.meta.code === 200) {
                navigate('/backoffice')
            }
        }
        onGetUserInfo()
    }, [authService, navigate]);

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src={LogoShamo}
                         alt="logo-shamo"/>
                    Shamo
                </a>
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="email" id="email"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="chelsey@company.com" required=""
                                       onChange={handleChange}
                                       value={email}
                                />
                                {errors.email && touched.email &&
                                    <div className="mt-4 text-sm text-red-800 dark:text-red-400">{errors.email}</div>}
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required=""
                                       onChange={handleChange}
                                       value={password}
                                />
                                {errors.password && touched.password && <div
                                    className="mt-4 text-sm text-red-800 dark:text-red-400">{errors.password}</div>}
                            </div>
                            <div></div>
                            <button type="submit"
                                    className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Sign
                                in
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?
                                <NavLink
                                    to="/register"
                                    className="font-medium text-teal-600 hover:underline dark:text-teal-500"> Sign up
                                </NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;
