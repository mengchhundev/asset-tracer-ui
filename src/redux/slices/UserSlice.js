import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    profile: {},
    isShow: false
}

export const userSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload;
        },
        setIsShow: (state, action) => {
            state.isShow = action.payload
        }
    }
});

export const {setProfile, setIsShow} = userSlice.actions
export default userSlice.reducer