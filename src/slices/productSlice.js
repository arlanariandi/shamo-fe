import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import RequestHelper from "../services/RequestHelper.js";

export const productAction = createAsyncThunk('product', RequestHelper);
export const selectProductAction = createAsyncThunk('product/selectProduct', RequestHelper);

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        selectedProduct: null,
    },
    extraReducers: (builder) => {
        builder.addCase(productAction.fulfilled, (state, {payload}) => {
            if (payload.data) {
                state.products = payload.data.data;
            }
        });

        builder.addCase(selectProductAction.fulfilled, (state, {payload}) => {
            if (payload) {
                state.selectedProduct = payload.data;
            }
        })
    }
});

export default productSlice;
