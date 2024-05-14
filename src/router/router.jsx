import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Login from "../pages/Login/index.jsx";

const setupRouter = () =>
    createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            errorElement: <>Error 404</>,
            children: [
                {
                    path: 'login',
                    element: <Login/>
                }
            ]
        }
    ])

export default setupRouter;
