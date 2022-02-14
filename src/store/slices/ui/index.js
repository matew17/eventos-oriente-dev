import { createSlice } from "@reduxjs/toolkit";

import initialState from "./initialState";

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            console.log(action.payload);
            state.loading = action.payload.loading;
        },
    },
});

export const { setLoading } = uiSlice.actions;

export default uiSlice.reducer;
