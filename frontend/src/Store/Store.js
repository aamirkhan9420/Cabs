import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";

let store=configureStore({
    reducer:{
        product:ProductSlice
    }
})
export default store