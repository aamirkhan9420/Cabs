import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


export const getProduct = createAsyncThunk("product/getproduct", (args, {
    rejectWithValue
}) => {
    try {
        return axios.get("http://localhost:3004/cabs").then((res) => {
            return res.data
        })
    } catch (error) {
        rejectWithValue(error)
    }
})
let ProductSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        isLoading: false,
        isErr: false,
        isSuccess: false,
        message: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state, { payload }) => {
            state.isLoading = true
        })
        builder.addCase(getProduct.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.isErr = false
            state.isSuccess = true
            state.data.push(...payload)
        })
        builder.addCase(getProduct.rejected, (state, { payload }) => {
            state.isLoading = false
            state.isErr = true
            state.isSuccess = false

        })
    }
})
export default ProductSlice.reducer