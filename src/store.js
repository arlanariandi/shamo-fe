import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice.js";

const setupStore = () => configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})

export default setupStore;
