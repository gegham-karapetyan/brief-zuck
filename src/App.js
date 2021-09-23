import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import SideBar from "./components/SideBar";
import Form from "./components/Form";

import { useSelector } from "react-redux";
import { LANG } from "./features/createSliceLanguages";

import "./App.scss";

function App() {
  const lg = useSelector(LANG);

  return (
    <div className={`App --${lg}`}>
      <Router basename="/brief">
        <SideBar lg={lg} />
        <Form lg={lg} />
      </Router>
    </div>
  );
}

export default App;
