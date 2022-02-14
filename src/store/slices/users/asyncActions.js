import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersAsync = createAsyncThunk(
    "users/getUsers",
    async (dispatch, getState) => {
        const url = "https://rickandmortyapi.com/api/character";

        const resp = await fetch(url);
        const data = await resp.json();

        return data;
    }
);
