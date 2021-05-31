import React, { useState } from "react";
import TextareaAutosize from "react-autosize-textarea";
import PropTypes from "prop-types";
import Hint from "../Hint";
import "./style.scss";

const Textarea = (props) => {
  const [focused, setFocused] = useState("");
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onFocus = () => {
    setFocused("focused");
  };
  const onBlur = (e) => {
    if (!e.target.value.trim()) {
      setFocused("");
      setValue("");
    }
  };
  return (
    <div>
      <label className={`textarea ${props.name.lg}`}>
        <div className={`textareaLabel ${focused}`}>
          {`${props.name.name}${props.name.required ? "*" : ""}`}
          {props.name.hint && <Hint text="some text" />}
        </div>
        <TextareaAutosize
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          name={props.name.name}
        />
      </label>
    </div>
  );
};

Textarea.propTypes = {
  name: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lg: PropTypes.string.isRequired,
    required: PropTypes.bool,
    hint: PropTypes.bool,
  }),
};

export default Textarea;
