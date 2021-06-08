import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: " ",
};

const selectBriefSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    selectBrief: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectBrief: selectBriefAC } = selectBriefSlice.actions;
export const briefType = (state) => state.selected.value;

export default selectBriefSlice.reducer;
