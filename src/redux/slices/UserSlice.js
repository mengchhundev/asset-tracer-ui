import { createSlice } from "@reduxjs/toolkit"
import { setItem } from "./OrganizationSlice";

const initialState = {
    profile: [],
    profileDetail: {
        name: "", gender: "", phone: "", address: "", image: ""
    },
    profileImage: null,
    data: [],
    users:null,
    userDetail: {
        name: ""
    },
    requestUsers: [],
    approveUsers:[],
    rejectUseReq:[]
}

export const userSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {
        setAllUser:(state, action) => {
            state.data = action.payload;
        },
        setUsers: (state, action ) => {
            state.users = action.payload;
        },
        setProfile: (state, action) => {
            state.profile = action.payload;
        },
        setProfileDetail: (state, action) => {
            state.profileDetail = action.payload
        },
        setProfileImage: (state, action) => {
            state.profileImage = action.payload
        },
        setUserDetail: (state, action) => {
            state.userDetail = action.payload
        },
        setRequestUsers: (state, action) => {
            state.requestUsers = action.payload
        },
        setUserapprove : (state, action) => {
            state.approveUsers = action.payload
        },
        setUserReject : (state, action) => {
            state.data = action.payload
        }
    }
});

export const {setProfile, setProfileDetail, setProfileImage, setAllUser, setUsers, setUserDetail, setRequestUsers, setUserapprove, setUserReject} = userSlice.actions
export default userSlice.reducer