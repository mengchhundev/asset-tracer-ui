import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    item: null,
    orgDetail: {
        id: "",
        name: "",
        code: "",
        address: "",
        roleName: "",
        image: ""
    },
    orgInvited: [],
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
        },
        setOrgDetail: (state, action) => {
            state.orgDetail = action.payload
        },
        setOrganizationInvited: (state, action) => {
            state.orgInvited = action.payload;
        },
    }
})

export const { setAllOrganization, setItem, setOrgDetail,setOrganizationInvited } = organizationSlice.actions
export default organizationSlice.reducer