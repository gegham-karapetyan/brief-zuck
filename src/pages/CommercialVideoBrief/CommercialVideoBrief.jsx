import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../features/selectBriefReducer";

import "./style.scss";
//import "react-calendar/dist/Calendar.css";

const CommercialVideoBrief = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectBriefAC("Commercial Video Brief"));
  });
  return (
    <div>
      <Test />
      <Test />
    </div>
  );
};

const useMyHook = () => {
  const [checked, setChecked] = useState(false);

  return [checked, setChecked];
};

const Test = () => {
  const [checked, setChecked] = useMyHook();
  const onClick = (state, setState, data) => {
    setState(!state);
    console.log(data);
  };
  return (
    <div>
      {checked && (
        <div style={{ border: "1px solid red", padding: "15px" }}>
          checked.............
        </div>
      )}
      <DIV
        onClick={(data) => {
          onClick(checked, setChecked, data);
        }}
      >
        hello
      </DIV>
    </div>
  );
};

const DIV = (props) => {
  return (
    <div>
      <div
        id="test"
        onClick={() => props.onClick(true)}
        style={{ border: "1px solid black", padding: "15px" }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default CommercialVideoBrief;
