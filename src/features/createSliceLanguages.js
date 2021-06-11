import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lg: "en",
};

const createSliceLanguages = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.lg = action.payload;
    },
  },
});

export const { setLanguage } = createSliceLanguages.actions;

export const LANG = (state) => state.language.lg;

export default createSliceLanguages.reducer;
