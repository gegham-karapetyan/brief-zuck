import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Brand: {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },

  "Name, Surname": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },

  "E-mail": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },

  Position: {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },

  "Phone number": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },
  "Website, Facebook, Instagram, etc.": {
    value: [],
    isValid: false,
    type: "typing_select",
    wasCheckedBySubmitButton: 0,
  },
  Summary: {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },
  "Campaign Type": {
    value: {},
    isValid: false,
    type: "multi_select",
    wasCheckedBySubmitButton: 0,
  },
  "Target group": {
    value: {
      man: [],
      woman: [],
    },
    isValid: false,
    wasCheckedBySubmitButton: 0,
    type: "target_select",
  },
  "Hyperactive buyer persona": { value: "", isValid: true, type: "text" },
  "Additional information about the target": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },
  "Current Consumer Behaviour": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },
  "Current Consumer Feedback": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },
  "Expected Consumer Feedback (after the completion of the campaign)": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },
  "Desired Consumer Behavior (after the completion of the campaign)": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },
  "USP (unique selling proposition)/Brand promise": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },
  "Insight/Consumer Insight": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },
  "The main message of the advertising campaign": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },
  "The secondary message of the advertising campaign": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },
  "RTB (reason to believe)": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },
  Barrier: {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },
  "Essential advertising campaign/communication elements": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },
  "Excluded advertising campaign/communication elements": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },
  "Campaign Scale": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },
  Media: {
    value: {},
    isValid: false,
    type: "multi_select",
    wasCheckedBySubmitButton: 0,
  },
  "Thoughts/Opinions about the competitors": {
    value: [],
    isValid: true,
    type: "typing_select",
  },
  "Agency’s Task": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },
  "KPIs (Key Performance Indicators)": {
    value: "",
    isValid: false,
    type: "text",
    wasCheckedBySubmitButton: 0,
  },
  "Advertising campaign deadlines": {
    value: [],
    isValid: false,
    type: "typing_select",
    wasCheckedBySubmitButton: 0,
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
    isValid: false,
    type: "additional",
    wasCheckedBySubmitButton: 0,
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
      const { name, keyName, id } = action.payload;
      state[keyName].name = name;
      state[keyName].id = id;
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
      if (required && value.length < 2) state[keyName].isValid = false;
      else state[keyName].isValid = true;
      state[keyName].value["Other"] = value;
    },
    setAdditionalInfoAsPlainText: (state, action) => {
      const { keyName, value } = action.payload;
      if (value.length >= 2) state[keyName].isValid = true;
      if (
        value.length <= 2 &&
        !Object.keys(state[keyName].value.files).length
      ) {
        state[keyName].isValid = false;
      }
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
      if (
        !Object.keys(state[keyName].value.files).length &&
        !state[keyName].value.Other
      )
        state[keyName].isValid = false;
      return state;
    },
    resetForm: (state, action) => {
      return {};
    },
    createForm: () => {
      return initialState;
    },
    scrollToInvalidFields: (state, action) => {
      const id = action.payload;
      const element = document.getElementById(id);
      setTimeout(() => element.scrollIntoView(), 100);
      for (let key in state) {
        if (state[key].wasCheckedBySubmitButton !== undefined)
          state[key].wasCheckedBySubmitButton = ++state[key]
            .wasCheckedBySubmitButton;
      }
    },
    resetCheckedBySubmitButton: (state) => {
      for (let key in state) {
        if (state[key].wasCheckedBySubmitButton !== undefined)
          state[key].wasCheckedBySubmitButton = 0;
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
  scrollToInvalidFields,
  setAdditionalInfoAsPlainText,
  updateThisField,
  updatePosition,
  resetCheckedBySubmitButton,
} = createSliceForm.actions;

export const FORM = (state) => state.form;

export const First_Invalid_Field = (state) =>
  Math.min(
    ...Object.values(state.form).reduce((acc, val) => {
      if (!val.isValid && val.pos) acc.push(val.pos);
      return acc;
    }, [])
  );
window.fff = First_Invalid_Field;

export default createSliceForm.reducer;
