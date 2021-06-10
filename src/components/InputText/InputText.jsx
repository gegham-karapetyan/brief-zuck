import React, { useState } from "react";
import PropTypes from "prop-types";
import Hint from "../Hint";
import "./style.scss";

const InputText = (props) => {
  const [focused, setFocused] = useState("");
  const onFocus = () => {
    if (props.onFocus) props.onFocus(true);
    setFocused("focused");
  };
  const onBlur = (e) => {
    if (!e.target.value.trim()) setFocused("");
  };
  return (
    <div>
      <label className={`textInput ${props.lg || "en"}`}>
        <div className={`textInputLabel ${focused}`}>
          {props.name}
          {props.hint && <Hint text="some text" />}
        </div>
        <input
          placeholder={props.placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          type="text"
          name={props.name}
        />
      </label>
    </div>
  );
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  lg: PropTypes.string,
  required: PropTypes.bool,
  hint: PropTypes.bool,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
};

export default InputText;
