import { configureStore } from "@reduxjs/toolkit";
import BookingSlice from "./BookingSlice";
import DeleteBooking from "./DeleteBooking";
import GetBookingSlice from "./GetBookingSlice";
import ProductSlice from "./ProductSlice";

let store=configureStore({
    reducer:{
        product:ProductSlice,
        booking:BookingSlice,
        getBooking:GetBookingSlice,
        deleteBooking:DeleteBooking
    }
   
})
export default store