import { createSlice } from "@reduxjs/toolkit";

const createSliceInvalidFieldsTopValues = createSlice({
  name: "invalidTopValues",
  initialState: {},
  reducers: {
    addRectTopValue: (state, action) => {
      const { value, keyName } = action.payload;
      state[keyName] = value;
    },
    resetRectTopValue: (state) => {
      return {};
    },
  },
});

export const { addRectTopValue, resetRectTopValue } =
  createSliceInvalidFieldsTopValues.actions;

export const First_Invalid_Field = (state) =>
  Math.min(
    ...Object.values(state.invalidFieldsTopValues).filter((val) => val !== null)
  );

export default createSliceInvalidFieldsTopValues.reducer;
