import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectBriefAC } from "../../features/selectBriefReducer";
import Test from "./Test";

import "./style.scss";
//import "react-calendar/dist/Calendar.css";

function gen(n) {
  let str = "";

  for (let i = 0; i < n; i++) {
    let code = Math.floor(65 + Math.random() * 20);

    str += String.fromCharCode(code);
  }
  return str;
}

const data = [];

(function () {
  for (let i = 0; i < 50; i++) {
    let name = gen(8);
    data.push(name);
  }
  return data;
})();

const CommercialVideoBrief = (props) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState("");
  const location = useLocation();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectBriefAC("Commercial Video Brief"));
  });
  return (
    <div>
      {data.map((name) => (
        <Test
          setFocused={setFocused}
          focused={focused}
          key={name}
          name={name}
        />
      ))}
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
        value={value}
      />
      <button
        onClick={() => {
          document.getElementById(value).click();
          console.log("location", location);
        }}
      >
        press
      </button>
    </div>
  );
};

const useMyHook = () => {
  const [checked, setChecked] = useState(false);

  return [checked, setChecked];
};

export default CommercialVideoBrief;
