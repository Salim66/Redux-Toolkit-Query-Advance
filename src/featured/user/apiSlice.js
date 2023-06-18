import { createSlice } from "@reduxjs/toolkit";


// create user reducer 
export const userSlice = createSlice({
    name: "user",
    initialState: {
        users: []
    },
    reducers: {

    }
});

// export 
export const { } = userSlice.actions;
export default userSlice.reducer;