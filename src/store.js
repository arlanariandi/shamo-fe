import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice.js";
import productSlice from "./slices/productSlice.js";

const setupStore = () => configureStore({
    reducer: {
        auth: authSlice.reducer,
        product: productSlice.reducer,
    }
})

export default setupStore;
