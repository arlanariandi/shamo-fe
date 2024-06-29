import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Login from "../pages/Login/index.jsx";
import Dashboard from "../pages/Dashboard/index.jsx";
import AuthenticatedLayout from "../layout/AuthenticatedLayout.jsx";
import Home from "../pages/Home/index.jsx";
import Register from "../pages/Register/index.jsx";
import PageNotFound from "../pages/404/index.jsx";
import User from "../pages/User/index.jsx";
import ProductDetail from "../pages/ProductDetail/index.jsx";

const setupRouter = () =>
    createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            errorElement: <PageNotFound/>,
            children: [
                {
                    path: 'login',
                    element: <Login/>
                },
                {
                    path: 'register',
                    element: <Register/>
                },
                {
                    index: true,
                    element: <Home/>,
                },
                {
                    path: 'backoffice',
                    element: <AuthenticatedLayout/>,
                    children: [
                        {
                            index: true,
                            element: <Dashboard/>
                        },
                        {
                            path: 'user',
                            element: <User/>
                        }
                    ]
                },
                {
                    path: 'product/:id',
                    element: <ProductDetail/>
                }
            ]
        }
    ])

export default setupRouter;
