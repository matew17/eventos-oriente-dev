import { createSlice } from "@reduxjs/toolkit";

import { getUsersAsync } from "./asyncActions";
import initialState from "./initialState";

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [getUsersAsync.pending]: (state) => {
            state.isFetching = true;
        },
        [getUsersAsync.fulfilled]: (state, action) => {
            state.isFetching = false;
            state.users = action.payload;
        },
        [getUsersAsync.rejected]: (state) => {
            state.isFetching = false;
        },
    },
});

export default usersSlice.reducer;

// usage

// const dispatch = useDispatch();
// const usersState = useSelector(getUsers);

// console.log(usersState);

// useEffect(() => {
//     dispatch(getUsersAsync());
// }, [dispatch]);
