import { configureStore } from "@reduxjs/toolkit";
import selectBriefReducer from "../features/selectBriefReducer.js";
import dataPickerReducer from "../features/createSliceDataPicker";
import textBlockReducer from "../components/test/createTestSlice";
export const store = configureStore(
  {
    reducer: {
      selected: selectBriefReducer,
      dataPicker: dataPickerReducer,
      textBlock: textBlockReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
