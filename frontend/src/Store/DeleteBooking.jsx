import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
 export const deleteBookingfunc=createAsyncThunk("booking/deleteBooking",(args,{rejectWithValue})=>{
  try {
    console.log(args)
    return axios.delete(`http://localhost:8080/booking/${args}`).then((res)=>{
       return res.data
    }).catch((error)=>{
        console.log(error)
    })
  } catch (error) {
    rejectWithValue(error)
  }
})

const DeleteBooking=createSlice({
    name:"deleteBooking",
    initialState:{
        data: [],
        isLoading: false,
        isErr: false,
        isSuccess: false,
        message: ""
    },
    reducers:{},
    extraReducers:(builder)=>{
      builder.addCase(deleteBookingfunc.pending,(state,{payload})=>{
        state.isLoading=true
      })
      builder.addCase(deleteBookingfunc.fulfilled,(state,{payload})=>{
        state.isLoading = false
        state.isErr = false
        state.isSuccess = true
        // state.data.push(...payload)
        state.message="Successfully deleted"
      })
      builder.addCase(deleteBookingfunc.rejected,(state,{payload})=>{
        state.isLoading = false
        state.isErr = true
        state.isSuccess = false
      })
    }
})
export default DeleteBooking.reducer




   