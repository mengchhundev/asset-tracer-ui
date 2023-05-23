import { configureStore } from "@reduxjs/toolkit";
import  superCategorySlice  from "./slices/SuperCategorySlice";
import  organizationSlice  from "./slices/OrganizationSlice";
import roomSilce from "./slices/RoomSlice";

export const store = configureStore({
    reducer: {
        superCategory: superCategorySlice,
        organizaton: organizationSlice,
        room: roomSilce
    }
});

export default store;