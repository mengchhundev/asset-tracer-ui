import { configureStore } from "@reduxjs/toolkit";
import  superCategorySlice  from "./slices/SuperCategorySlice";
import  organizationSlice  from "./slices/OrganizationSlice";
import roomSilce from "./slices/RoomSlice";
import userSlice  from "./slices/UserSlice";
import  assetSlice  from "./slices/AssetSlice";
import invoiceSilce from "./slices/InvoiceSlice";
import  normalCategorySlice  from "./slices/NomolCategorySlice";

export const store = configureStore({
    reducer: {
        superCategory: superCategorySlice,
        organization: organizationSlice,
        room: roomSilce,
        user: userSlice,
        asset: assetSlice,
        invoice: invoiceSilce,
        normalCategory : normalCategorySlice
    }
});

export default store;