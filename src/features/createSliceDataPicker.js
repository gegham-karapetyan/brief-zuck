import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: { startValue: "", endValue: "" },
  calendar: {
    value: "08/06/2021",
    activeStartDate: "08/06/2021",
  },
};

const createSliceDataPicker = createSlice({
  name: "dataPicker",
  initialState,
  reducers: {
    updateStartDateInputValue: (state, action) => {
      state.input.startValue = action.payload;
    },
    updateEndDateInputValue: (state, action) => {
      state.input.endValue = action.payload;
    },

    updateCalendarValue: (state, action) => {
      state.calendar.value = action.payload;
    },
    updateCalendarActiveStartDate: (state, action) => {
      state.calendar.activeStartDate = action.payload;
    },
  },
});

console.log("createSliceDataPicker", createSliceDataPicker);
export const {
  updateStartDateInputValue,
  updateEndDateInputValue,
  updateCalendarValue,
  updateCalendarActiveStartDate,
} = createSliceDataPicker.actions;
export const INPUT_START_VALUE = (state) => state.dataPicker.input.startValue;
export const INPUT_END_VALUE = (state) => state.dataPicker.input.endValue;
export const CALENDAR_VALUE = (state) => state.dataPicker.calendar.value;
export const CALENDAR_ACTIVE_START_DATE = (state) =>
  state.dataPicker.calendar.activeStartDate;
export default createSliceDataPicker.reducer;
