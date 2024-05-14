import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider as Router} from 'react-router-dom';
import setupRouter from "./router/router.jsx";
import {Provider} from "react-redux";
import setupStore from "./store.js";
import ServiceFactory from "./services/ServiceFactory.js";
import ServiceProvider from "./context/ServiceContext.jsx";

const store = setupStore()
const router = setupRouter()
const service = ServiceFactory()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <ServiceProvider service={service}>
                <Router router={router}/>
            </ServiceProvider>
        </Provider>
    </React.StrictMode>,
)
