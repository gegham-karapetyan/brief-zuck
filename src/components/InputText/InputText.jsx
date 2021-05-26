import React, { useState } from "react";
import Hint from "../Hint";
import "./style.scss";

const parser = (text) => {
  return <></>;
};

const InputText = (props) => {
  const [focused, setFocused] = useState("");
  const onFocus = () => {
    setFocused("focused");
  };
  const onBlur = (e) => {
    if (!e.target.value.trim()) setFocused("");
  };
  return (
    <div>
      <label className={`textInput ${props.name.lg}`}>
        <div className={`textInputLabel ${focused}`}>
          {props.name.xx && [...props.name.xx]}
          {`${props.name.name}${props.name.required ? "*" : ""}`}
          {props.name.hint && <Hint text="some text" />}
        </div>
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          type="text"
          name={props.name.name}
        />
      </label>
    </div>
  );
};

export default InputText;
