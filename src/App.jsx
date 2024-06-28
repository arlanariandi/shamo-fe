import './App.css'
import {Outlet} from "react-router-dom";

const App = () => {

    return (
        <div className="min-h-screen flex justify-center bg-gray-100">
            <div className="bg-white min-w-1/2">
                <Outlet/>
            </div>
        </div>
    )
}

export default App
