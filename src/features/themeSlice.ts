import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: !!JSON.parse(localStorage.getItem("darkMode") || "false"),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const asyncToggleTheme = () => (dispatch: (arg0: { payload: undefined; type: string; }) => void) => {
  const isDarkMode = !!JSON.parse(localStorage.getItem("darkMode") || "false");
  // @ts-ignore
  localStorage.setItem("darkMode", !isDarkMode);
  dispatch(toggleTheme());
};

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;