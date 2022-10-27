import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

// Slice is essentially like a container function for states, actions, and reducers
const favouriteSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        addFavourite(state, action) {
            // @ts-ignore
            state.push(action.payload);
        },

        removeFavourite(state, action) {
            // @ts-ignore
            state = state.filter((item) => item.id !== action.payload);
        }
    }
  });

export const { addFavourite, removeFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;