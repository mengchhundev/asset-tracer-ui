import { createSlice} from '@reduxjs/toolkit';

const initialState ={
    data:[]
}
export const invoiceSilce = createSlice ({
    
    name: "Invoices",
    initialState,
    reducers:{
        setAllInvoice: (state, action)=>{
            state.data = action.payload;
        },
    }
});
export const {setAllInvoice} = invoiceSilce.actions
export default invoiceSilce.reducer;