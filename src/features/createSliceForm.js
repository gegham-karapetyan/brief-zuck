import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "Brand *": { value: "", isValid: false, type: "text" },

  "Name, Surname *": { value: "", isValid: false, type: "text" },

  "E-mail *": { value: "", isValid: false, type: "text" },

  "Position *": { value: "", isValid: false, type: "text" },

  "Telephone *": { value: "", isValid: false, type: "text" },
  "Website, Facebook, Instagram, etc. *": {
    value: [],
    isValid: false,
    type: "typing_select",
  },
  "Brief Description *": { value: "", isValid: false, type: "text" },
  "Campaign Type *": { value: {}, isValid: false, type: "multi_select" },
  "Target Audience *": {
    value: {
      man: [],
      woman: [],
    },
    isValid: false,
    type: "target_select",
  },
  "Hyperactive buyer persona": { value: "", isValid: true, type: "text" },
  "Additional information about the target": {
    value: "",
    isValid: true,
    type: "text",
  },
  "Current Consumer Behaviour": { value: "", isValid: true, type: "text" },
  "Current Consumer Opinion": { value: "", isValid: true, type: "text" },
  "Desired Consumer Opinion (after campaign implementation)": {
    value: "",
    isValid: true,
    type: "text",
  },
  "USP (unique selling proposition)/Brand promise *": {
    value: "",
    isValid: false,
    type: "text",
  },
  "Insight/Consumer Insight *": { value: "", isValid: false, type: "text" },
  "Primary Message *": { value: "", isValid: false, type: "text" },
  "Secondary Message *": { value: "", isValid: false, type: "text" },
  "RTB (reason to believe)": { value: "", isValid: true, type: "text" },
  Barrier: { value: "", isValid: true, type: "text" },
  "Advertising campaign / communication elements that are mandatory *": {
    value: "",
    isValid: false,
    type: "text",
  },
  "Advertising campaign / communication elements that are prohibited *": {
    value: "",
    isValid: false,
    type: "text",
  },
  "Campaign Range *": {
    value: "Integrated Campaign",
    isValid: true,
    type: "text",
  },
  "Media *": {
    value: {},
    isValid: false,
    type: "multi_select",
  },
  "Notes about the competitors": {
    value: [],
    isValid: true,
    type: "typing_select",
  },
  "Agency Tasks *": { value: "", isValid: false, type: "text" },
  "KPIs (Key Performance Indicators) *": {
    value: "",
    isValid: false,
    type: "text",
  },
  "Campaign Implementation Timeframe *": {
    value: [],
    isValid: false,
    type: "typing_select",
  },
  "Campaign Budget": { value: "", isValid: true, type: "text" },
  "Similar work that you like": {
    value: [],
    isValid: true,
    type: "typing_select",
  },
  "Similar work that you don’t like": {
    value: [],
    isValid: true,
    type: "typing_select",
  },

  "Additional Information": {
    value: { files: {}, Other: "" },
    isValid: true,
    type: "additional",
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
    resetForm: (state, action) => {
      return {};
    },
    createForm: () => {
      return initialState;
    },
    newField: (state, action) => {
      console.log("action", action);
      const { keyName, value } = action.payload;
      state[keyName] = {};
      state[keyName].value = value;
    },
  },
});

export const {
  updateForm,
  setOtherText,
  setFiles,
  deleteFiles,
  setFieldName,
  resetForm,
  createForm,
  newField,
} = createSliceForm.actions;

export const FORM = (state) => state.form;

export default createSliceForm.reducer;
