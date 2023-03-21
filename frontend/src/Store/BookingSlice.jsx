import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const makeBooking = createAsyncThunk("booking/makeBooking", (args, {
    rejectWithValue
}) => {
    try {
        console.log(args);
        return axios.post("http://localhost:8080/booking/",args).then((res) => {
            return res.data
        }).catch((error)=>{
            console.log(error);
        })

    } catch (error) {
        rejectWithValue(error)
    }
})

let BookingSlice = createSlice({
    name: "booking",
    initialState: {
        data: [],
        isLoading: false,
        isErr: false,
        isSuccess: false,
        message: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(makeBooking.pending, (state, { payload }) => {
            state.isLoading = true
        })
        builder.addCase(makeBooking.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.isErr = false
            state.isSuccess = true
            state.data.push(payload)
            state.message="Successfully Booked "
        })
        builder.addCase(makeBooking.rejected, (state, { payload }) => {
            state.isLoading = false
            state.isErr = true
            state.isSuccess = false
        })
    }
})
export default BookingSlice.reducer