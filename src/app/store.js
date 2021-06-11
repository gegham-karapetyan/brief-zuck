import { configureStore, combineReducers } from "@reduxjs/toolkit";

import selectBriefReducer from "../features/selectBriefReducer.js";
import dataPickerReducer from "../features/createSliceDataPicker";
import textBlockReducer from "../components/test/createTestSlice";
import updateLanguageReducer from "../features/createSliceLanguages";

const appReducer = combineReducers({
  selected: selectBriefReducer,
  dataPicker: dataPickerReducer,
  textBlock: textBlockReducer,
  language: updateLanguageReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export const store = configureStore(
  {
    reducer: rootReducer,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;
window.rootReducer = rootReducer;
