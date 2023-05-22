import { configureStore } from "@reduxjs/toolkit";
import  superCategorySlice  from "./slices/SuperCategorySlice";
import  organizationSlice  from "./slices/OrganizationSlice";

export const store = configureStore({
    reducer: {
        superCategory: superCategorySlice,
        organizaton: organizationSlice
    }
});

export default store;