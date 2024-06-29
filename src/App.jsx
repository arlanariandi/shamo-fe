import './App.css'
import {Outlet, useLocation} from "react-router-dom";

const App = () => {
    const location = useLocation()
    const noClassPaths = ['/login', '/register', '/backoffice'];

    return (
        <div
            className={`${noClassPaths.includes(location.pathname) ? '' : 'min-h-screen flex justify-center bg-gray-100'}`}>
            <div className={`${noClassPaths.includes(location.pathname) ? '' : 'bg-white w-full max-w-md'}`}>
                <Outlet/>
            </div>
        </div>
    );
}

export default App
