import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import SideBar from "./components/SideBar";
import Form from "./components/Form";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <SideBar />
        <Form />
      </Router>
    </div>
  );
}

export default App;
