import {NavLink, useNavigate} from "react-router-dom";
import LogoShamo from "../../assets/logo-shamo.png";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {useContext, useEffect} from "react";
import {ServiceContext} from "../../context/ServiceContext.jsx";
import {useFormik} from "formik";
import {authAction} from "../../slices/authSlice.js";

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {authService} = useContext(ServiceContext);

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
        password2: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
    });

    const {
        values: {name, email, username, password, password2},
        handleChange,
        handleSubmit,
        errors,
        touched
    } = useFormik({
        initialValues: {
            name: '',
            email: '',
            username: '',
            password: '',
            password2: ''
        },
        validationSchema,
        onSubmit: async (values) => {
            const {password2, ...rest} = values;
            dispatch(
                authAction(async () => {
                    const result = await authService.register(rest);
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
            const result = await authService.getUserInfo();
            if (result.statusCode === 200) {
                navigate('/backoffice');
            }
        };
        onGetUserInfo();
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
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" name="name" id="name"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Chelsey Dietrich" required=""
                                       onChange={handleChange}
                                       value={name}
                                />
                                {errors.name && touched.name &&
                                    <div className="mt-4 text-sm text-red-800 dark:text-red-400">{errors.name}</div>}
                            </div>
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
                                <label htmlFor="username"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input type="text" name="username" id="username"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="chelsey" required=""
                                       onChange={handleChange}
                                       value={username}
                                />
                                {errors.username && touched.username && <div
                                    className="mt-4 text-sm text-red-800 dark:text-red-400">{errors.username}</div>}
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
                            <div>
                                <label htmlFor="password2"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                                    password</label>
                                <input type="password" name="password2" id="password2" placeholder="••••••••"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required=""
                                       onChange={handleChange}
                                       value={password2}
                                />
                                {errors.password2 && touched.password2 && <div
                                    className="mt-4 text-sm text-red-800 dark:text-red-400">{errors.password2}</div>}
                            </div>

                            <div></div>

                            <button type="submit"
                                    className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                                Create an account
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account?
                                <NavLink to="/login"
                                         className="font-medium text-teal-600 hover:underline dark:text-teal-500"> Login
                                    here
                                </NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;
