import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getBookings = createAsyncThunk("getbooking/getBookings", (args, {rejectWithValue}) => {
    try {
        return axios.get("http://localhost:9000/booking").then((res) => {
            return res.data
        }).catch((error)=>{
            console.log(error);
        })

    } catch (error) {
        rejectWithValue(error)
    }
})
export const deleteBookingf=createAsyncThunk("booking/deleteBooking",(args,{rejectWithValue})=>{
    try {
     
      return axios.delete(`http://localhost:9000/booking/${args}`).then((res)=>{
          
         return args
      }).catch((error)=>{
          console.log(error)
      })
    } catch (error) {
        console.log(error)
      rejectWithValue(error)
    }
  })

let getBookingSlice = createSlice({
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
      
        builder.addCase(getBookings.pending, (state, { payload }) => {
            state.isLoading = true
        })
        builder.addCase(getBookings.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.isErr = false
            state.isSuccess = true
            state.data.push(...payload)
            state.message="Successful"
        })
        builder.addCase(getBookings.rejected, (state, { payload }) => {
            state.isLoading = false
            state.isErr = true
            state.isSuccess = false
        })
        // ---------delete------//
        builder.addCase(deleteBookingf.pending, (state, { payload }) => {
            state.isLoading = true
        })
        builder.addCase(deleteBookingf.fulfilled, (state, { payload }) => {
            console.log(payload)
            state.isLoading = false
            state.isErr = false
            state.isSuccess = true
            state.data=state.data.filter(({id})=>id!==payload)
            state.message="Successful"
        })
        builder.addCase(deleteBookingf.rejected, (state, { payload }) => {
            state.isLoading = false
            state.isErr = true
            state.isSuccess = false
        })
    }
})
export default getBookingSlice.reducer