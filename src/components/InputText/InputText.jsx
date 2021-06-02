import React, { useState } from "react";
import PropTypes from "prop-types";
import Hint from "../Hint";
import "./style.scss";

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

InputText.propTypes = {
  name: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lg: PropTypes.string.isRequired,
    required: PropTypes.bool,
    hint: PropTypes.bool,
  }),
};

export default InputText;
