import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    profile: {},
    profileDetail: {
        name: "", gender: "", phone: "", address: "", image: ""
    },
    profileImage: null
}

export const userSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload;
        },
        setProfileDetail: (state, action) => {
            state.profileDetail = action.payload
        },
        setProfileImage: (state, action) => {
            state.profileImage = action.payload
        }
    }
});

export const {setProfile, setProfileDetail, setProfileImage} = userSlice.actions
export default userSlice.reducer