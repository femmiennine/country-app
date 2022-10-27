import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSlice"
import countriesReducer from "../features/countriesSlice"
// import favouriteReducer from "../features/favouriteSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        countries: countriesReducer,
        // favourite: favouriteReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;