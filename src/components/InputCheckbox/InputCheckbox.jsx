import React, { useState } from "react";

import "./style.scss";

const InputCheckbox = (props) => {
  const [checked, setChecked] = useState(false);

  const onChange = (e) => {
    setChecked(!checked);

    if (e.target.name === "Other") {
      props.addNewInput(!checked);
    }
  };
  return (
    <label className="inputCheckbox" style={{ opacity: checked ? "1" : "0.5" }}>
      <div
        className="checkmarkContainer"
        style={{
          backgroundColor: checked ? "black" : "transparent",
        }}
      >
        <div style={checkmark}></div>
      </div>
      <div>{props.name}</div>

      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        name={props.name}
        style={{ opacity: 0, height: 0, width: 0 }}
      />
    </label>
  );
};

const checkmark = {
  width: "5px",
  height: "6px",
  borderBottom: "1px solid #feebe1",
  marginTop: "3px",
  marginLeft: "5px",
  borderRight: "1px solid #feebe1",
  transform: "rotate(45deg)",
};

export default InputCheckbox;
