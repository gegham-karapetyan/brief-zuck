import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: " ",
};

const createSliceDataPicker = createSlice({
  name: "dataPicker",
  initialState,
  reducers: {
    updateDateInputValue: (state, action) => {
      state.value = action.payload;
    },
    updateCalendar: (state, action) => {},
  },
});

export const { selectBrief: selectBriefAC } = createSliceDataPicker.actions;
export const value = (state) => state.selected.value;
export default createSliceDataPicker.reducer;
