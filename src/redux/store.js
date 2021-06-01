import { configureStore } from "@reduxjs/toolkit";
import selectBriefReducer from "./selectBriefReducer";

export const store = configureStore(
  {
    reducer: {
      selected: selectBriefReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
