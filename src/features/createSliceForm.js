import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "Brand *": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
  },

  "Name, Surname *": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
  },

  "E-mail *": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
  },

  "Position *": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
  },

  "Telephone *": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
  },
  "Website, Facebook, Instagram, etc. *": {
    value: [],
    isValid: false,
    type: "typing_select",
    wasCheckedBySubmitButton: false,
  },
  "Brief Description *": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
  },
  "Campaign Type *": {
    value: {},
    isValid: false,
    type: "multi_select",
    wasCheckedBySubmitButton: false,
  },
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
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
  },
  "Current Consumer Behaviour": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
  },
  "Current Consumer Opinion": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
  },
  "Desired Consumer Opinion (after campaign implementation)": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
  },
  "Desired Consumer Behaviour (after campaign implementation)": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
  },
  "USP (unique selling proposition)/Brand promise *": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
  },
  "Insight/Consumer Insight *": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
  },
  "Primary Message *": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
  },
  "Secondary Message *": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
  },
  "RTB (reason to believe)": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
  },
  Barrier: {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
  },
  "Advertising campaign / communication elements that are mandatory *": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
  },
  "Advertising campaign / communication elements that are prohibited *": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
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
    wasCheckedBySubmitButton: false,
  },
  "Notes about the competitors": {
    value: [],
    isValid: true,
    type: "typing_select",
  },
  "Agency Tasks *": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
  },
  "KPIs (Key Performance Indicators) *": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: false,
  },
  "Campaign Implementation Timeframe *": {
    value: [],
    isValid: false,
    type: "typing_select",
    wasCheckedBySubmitButton: false,
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
    updateThisField: (state, action) => {
      const { keyName, isValid, value } = action.payload;

      state[keyName].value = value;
      state[keyName].isValid = isValid;
    },
    setFieldName: (state, action) => {
      const { name, keyName } = action.payload;
      state[keyName].name = name;
    },
    updateForm: (state, action) => {
      const { keyName, isValid, value } = action.payload;

      state[keyName].isValid = isValid;
      state[keyName].value = value;
    },
    updateMultiSelectField: (state, action) => {
      const { keyName, isValid, value } = action.payload;

      state[keyName].value = value;
      state[keyName].isValid = isValid;

      //return state;
    },
    setOtherText: (state, action) => {
      const { keyName, value, required } = action.payload;
      if (required && !value) state[keyName].isValid = false;
      else state[keyName].isValid = true;
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
    hasSubmitted: (state) => {
      for (let key in state) {
        if (state[key].wasCheckedBySubmitButton !== undefined)
          state[key].wasCheckedBySubmitButton = true;
      }
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
  hasSubmitted,

  updateThisField,
} = createSliceForm.actions;

export const FORM = (state) => state.form;

export default createSliceForm.reducer;
