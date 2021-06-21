import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  __type__: "Advertising Campaign Brief",

  "Brand *": { value: "", isValid: false },

  "Name, Surname *": { value: "", isValid: false },

  "E-mail *": { value: "", isValid: false },

  "Position *": { value: "", isValid: false },

  "Telephone *": { value: "", isValid: false },
  "Website, Facebook, Instagram, etc. *": {
    value: [],
    isValid: false,
  },
  "Brief Description *": { value: "", isValid: false },
  "Campaign Type *": { value: {}, isValid: false },
  "Target Audience *": {
    value: {
      man: [],
      woman: [],
    },
    isValid: false,
  },
  "Hyperactive buyer persona": { value: "", isValid: true },
  "Additional information about the target": { value: "", isValid: true },
  "Current Consumer Behaviour": { value: "", isValid: true },
  "Current Consumer Opinion": { value: "", isValid: true },
  "Desired Consumer Opinion (after campaign implementation)": {
    value: "",
    isValid: true,
  },
  "USP (unique selling proposition)/Brand promise *": {
    value: "",
    isValid: false,
  },
  "Insight/Consumer Insight *": { value: "", isValid: false },
  "Primary Message *": { value: "", isValid: false },
  "Secondary Message *": { value: "", isValid: false },
  "RTB (reason to believe)": { value: "", isValid: true },
  Barrier: { value: "", isValid: true },
  "Advertising campaign / communication elements that are mandatory *": {
    value: "",
    isValid: false,
  },
  "Advertising campaign / communication elements that are prohibited *": {
    value: "",
    isValid: false,
  },
  "Campaign Range *": {
    value: "Integrated Campaign",
    isValid: true,
  },
  "Media *": {
    value: {},
    isValid: false,
  },
  "Notes about the competitors": { value: [], isValid: true },
  "Agency Tasks *": { value: "", isValid: false },
  "KPIs (Key Performance Indicators) *": { value: "", isValid: false },
  "Campaign Implementation Timeframe *": {
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

  "Additional Information": {
    value: { files: {}, Other: "" },
    isValid: true,
  },
};

const createSliceForm = createSlice({
  name: "form",
  initialState,

  reducers: {
    setFieldName: (state, action) => {
      const { name, keyName } = action.payload;
      state[keyName].name = name;
    },
    updateForm: (state, action) => {
      const { keyName, isValid, value } = action.payload;

      state[keyName].isValid = isValid;
      state[keyName].value = value;
    },
    setOtherText: (state, action) => {
      const { keyName, value } = action.payload;
      state[keyName].value["Other"] = value;
    },
    setFiles: (state, action) => {
      const { keyName, isValid, value, id } = action.payload;
      state[keyName].isValid = isValid;
      state[keyName].value.files[id] = value;
    },
    deleteFiles: (state, action) => {
      const { id, keyName } = action.payload;
      delete state[keyName].value.files[id];
      return state;
    },
  },
});

export const { updateForm, setOtherText, setFiles, deleteFiles, setFieldName } =
  createSliceForm.actions;

export const FORM = (state) => state.form;

export default createSliceForm.reducer;
