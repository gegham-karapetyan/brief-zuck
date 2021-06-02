import React, { useEffect, useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import SideBar from "./components/SideBar";
import Form from "./components/Form";

import "./App.css";

function App() {
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
        <SideBar data={data} />
        <Form />
      </Router>
    </div>
  );
}

export default App;
