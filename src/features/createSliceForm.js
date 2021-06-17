import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Brand: { value: "", isValid: false },

  "Name, Surname": { value: "", isValid: false },

  "E-mail": { value: "", isValid: false },

  Position: { value: "", isValid: false },

  Telephone: { value: "", isValid: false },
  "Website, Facebook, Instagram, etc.": {
    value: [],
    isValid: false,
  },
  "Brief Description": { value: "", isValid: false },
  "Campaign Type": { value: {}, isValid: false },
  "Target Audience": {
    value: {
      man: [],
      woman: [],
    },
    isValid: false,
  },
  "Hyperactive Buyers": { value: "", isValid: true },
  "Additional information about the target": { value: "", isValid: true },
  "Current Consumer Behaviour": { value: "", isValid: true },
  "Current Consumer Opinion": { value: "", isValid: true },
  "Desired Consumer Opinion (after campaign implementation)": {
    value: "",
    isValid: true,
  },
  "USP (unique selling proposition) /Brand promise": {
    value: "",
    isValid: false,
  },
  "Insight/Consumer Insight": { value: "", isValid: false },
  "Primary Message": { value: "", isValid: false },
  "Secondary Message": { value: "", isValid: false },
  "RTB (reason to believe)": { value: "", isValid: true },
  Barrier: { value: "", isValid: true },
  "Advertising campaign / communication elements that are mandatory": {
    value: "",
    isValid: false,
  },
  "Advertising campaign / communication elements that are prohibited": {
    value: "",
    isValid: false,
  },
  "Campaign Range": {
    value: "Integrated Campaign",
    isValid: true,
  },
  Media: {
    value: {},
    isValid: false,
  },
  "Notes about the competitors": { value: [], isValid: true },
  "Agency Tasks": { value: "", isValid: false },
  "KPIs (Key Performance Indicators)": { value: "", isValid: false },
  "Campaign Implementation Timeframe": {
    value: [],
    isValid: false,
  },
  "Campaign Budget": { value: [], isValid: true },
  "Similar work that you like": {
    value: [],
    isValid: true,
  },
  "Similar work that you don’t like": {
    value: [],
    isValid: true,
  },

  "Additional Information": { value: [], isValid: true },
};

const createSliceForm = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      const { name, isValid, value } = action.payload;

      state[name].isValid = isValid;
      state[name].value = value;
    },
    setOtherText: (state, action) => {
      const { name, value } = action.payload;
      state[name].value["Other"] = value;
    },
  },
});

export const { updateForm, setOtherText } = createSliceForm.actions;

export const FORM = (state) => state.form;

export default createSliceForm.reducer;
