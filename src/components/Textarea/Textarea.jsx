import React, { useState, useEffect } from "react";
import TextareaAutosize from "react-autosize-textarea";

import PropTypes from "prop-types";
import Hint from "../Hint";
//import { useDispatch } from "react-redux";
//import { updateForm, setFieldName } from "../../features/createSliceForm";

import "./style.scss";

const Textarea = ({
  title,
  lg,
  name,
  hintText,
  required,
  isValid,
  updateForm,
  isFocused,
}) => {
  const [focused, setFocused] = useState(isFocused || "");
  const [value, setValue] = useState("");
  const [invalid, setInvalid] = useState("");

  const onChange = (e) => {
    const value = e.target.value;

    setValue(e.target.value);

    if (required && !isValid(value)) setInvalid("invalid");
    else setInvalid("");
  };
  const onFocus = () => {
    setFocused("focused");
  };
  const onBlur = (e) => {
    const value = e.target.value.trim();
    if (required) {
      updateForm({
        value,
        isValid: isValid(value),
        keyName: name.en,
      });
    } else {
      updateForm({
        value,
        isValid: true,
        keyName: name.en,
      });
    }

    if (!value) {
      setFocused("");
      setValue("");
      if (required) setInvalid("invalid");
    }
  };

  return (
    <div>
      <label className={`textarea ${lg}`}>
        <div className={`textareaLabel ${focused}`}>
          {title[lg]}
          {hintText && <Hint hintText={hintText[lg]} />}
        </div>
        <TextareaAutosize
          className={invalid}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          name={name["en"]}
        />
      </label>
    </div>
  );
};

Textarea.propTypes = {
  title: PropTypes.object,
  name: PropTypes.object.isRequired,
  lg: PropTypes.string.isRequired,
  required: PropTypes.bool,
  hint: PropTypes.bool,
};

export default Textarea;
