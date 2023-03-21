import { configureStore } from "@reduxjs/toolkit";
import BookingSlice from "./BookingSlice";
import GetBookingSlice from "./GetBookingSlice";
import ProductSlice from "./ProductSlice";

let store=configureStore({
    reducer:{
        product:ProductSlice,
        booking:BookingSlice,
        getBooking:GetBookingSlice
    }
   
})
export default store