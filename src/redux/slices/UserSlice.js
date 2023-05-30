import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    profile: {}
}

export const userSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload;
        },
    }
});

export const {setProfile} = userSlice.actions
export default userSlice.reducer