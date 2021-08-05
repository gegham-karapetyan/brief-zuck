import { createSlice } from "@reduxjs/toolkit";
import AdCampaignInitState from "./AdvertisingCampaignBriefState";
import VideoBriefState from "./VideoBriefState";

const createSliceForm = createSlice({
  name: "form",
  initialState: {},

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
    createAdCampaignBriefForm: (state) => {
      return (state = AdCampaignInitState);
    },
    createVideoBriefForm: (state) => {
      return (state = VideoBriefState);
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
  createAdCampaignBriefForm,
  createVideoBriefForm,
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
