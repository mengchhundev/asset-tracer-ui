import { configureStore } from "@reduxjs/toolkit";
import  superCategorySlice  from "./slices/SuperCategorySlice";

export const store = configureStore({
    reducer: {
        superCategory: superCategorySlice
    }
});

export default store;