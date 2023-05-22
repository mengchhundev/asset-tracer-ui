import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: []
}

export const organizationSlice = createSlice({
    name: "Organization",
    initialState,
    reducers: {
        setAllOrganization: (state, action) => {
            state.data = action.payload
        }
    }
})

export const {setAllOrganization} = organizationSlice.actions
export default organizationSlice.reducer