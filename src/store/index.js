import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./slices/ui";

export default configureStore({
    reducer: {
        ui: uiSlice,
    },
});
