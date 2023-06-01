import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    profile: {},
    profileDetail: {}
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
        }
    }
});

export const {setProfile, setProfileDetail} = userSlice.actions
export default userSlice.reducer