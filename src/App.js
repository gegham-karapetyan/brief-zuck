import React, { useEffect, useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import SideBar from "./components/SideBar";
import Form from "./components/Form";

import { useSelector } from "react-redux";
import { LANG } from "./features/createSliceLanguages";

import "./App.css";

function App() {
  const lg = useSelector(LANG);
  const [data, setData] = useState("");
  useEffect(() => {
    async function fetchdata() {
      const res = await fetch("./data.json");
      const data = await res.json();
      setData(data);
      console.log(data);
    }
    fetchdata();
  }, []);
  return (
    <div className="App" data={data}>
      <Router basename="/">
        <SideBar lg={lg} data={data} />
        <Form lg={lg} />
      </Router>
    </div>
  );
}

export default App;
