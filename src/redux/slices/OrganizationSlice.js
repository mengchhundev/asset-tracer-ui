import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    item: {
        id: "",
        name: "",
        address: "",
        logo: ""
    }
}

export const organizationSlice = createSlice({
    name: "Organization",
    initialState,
    reducers: {
        setAllOrganization: (state, action) => {
            state.data = action.payload
        },
        setItem: (state, action) => {
            state.item = action.payload
        }
    }
})

export const {setAllOrganization, setItem} = organizationSlice.actions
export default organizationSlice.reducer