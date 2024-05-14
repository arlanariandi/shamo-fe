import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider as Router} from 'react-router-dom';
import setupRouter from "./router/router.jsx";

const router = setupRouter();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router router={router}/>
    </React.StrictMode>,
)
