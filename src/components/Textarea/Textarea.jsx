import React, { useState } from "react";
import TextareaAutosize from "react-autosize-textarea";
import PropTypes from "prop-types";
import Hint from "../Hint";
import { useDispatch } from "react-redux";
import { updateForm } from "../../features/createSliceForm";

import "./style.scss";

const Textarea = ({
  title,
  lg,
  name,
  hintText,
  required,
  isValid,
  otherDescription,
}) => {
  const [focused, setFocused] = useState("");
  const [value, setValue] = useState("");
  const [invalid, setInvalid] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    const value = e.target.value;

    setValue(e.target.value);
    if (!required && !otherDescription) {
      dispatch(updateForm({ value, isValid: true, name }));
    } else if (required && !otherDescription) {
      dispatch(updateForm({ value, isValid: isValid(value), name }));
    } else {
      otherDescription(value);
    }

    if (required && !isValid(value)) setInvalid("invalid");
    else setInvalid("");
  };
  const onFocus = () => {
    setFocused("focused");
  };
  const onBlur = (e) => {
    const value = e.target.value.trim();

    if (!value) {
      setFocused("");
      setValue("");
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
          name={name}
        />
      </label>
    </div>
  );
};

Textarea.propTypes = {
  title: PropTypes.object,
  name: PropTypes.string.isRequired,
  lg: PropTypes.string.isRequired,
  required: PropTypes.bool,
  hint: PropTypes.bool,
};

export default Textarea;
