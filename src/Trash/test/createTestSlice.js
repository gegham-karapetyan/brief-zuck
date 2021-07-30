import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "" };

const createTestSlice = createSlice({
  name: "textBlock",
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateValue } = createTestSlice.actions;

export const VALUE = (state) => state.textBlock.value;

export default createTestSlice.reducer;
