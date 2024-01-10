import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  lang: "uz",
  showSidebar: false,
};

const settingsSlice = createSlice({
  name: "Settings Slice",
  initialState,
  reducers: {
    toggleSidebar(state, action) {
      state.showSidebar = action.payload ?? !state.showSidebar;
    },
  },
});

const settingsReducer = settingsSlice.reducer;

export default settingsReducer;

export const { toggleSidebar } = settingsSlice.actions;
