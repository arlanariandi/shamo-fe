import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import RequestHelper from "../services/RequestHelper.js";

export const productAction = createAsyncThunk('product', RequestHelper);

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
    },
    extraReducers: (builder) => {
        builder.addCase(productAction.fulfilled, (state, {payload}) => {
            if (payload.data) {
                state.products = payload.data.data;
            }
        });
    }
});

export default productSlice;
