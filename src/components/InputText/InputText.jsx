import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateForm } from "../../features/createSliceForm";
// import Hint from "../Hint";
import "./style.scss";
import { useEffect } from "react";

const InputText = ({ name, lg, placeholder, title, required, isValid }) => {
  const [focused, setFocused] = useState("");
  const [invalid, setInvalid] = useState("");
  const [value, setValue] = useState("");
  const focusHandler = () => {
    setFocused("focused");
  };

  const dispatch = useDispatch();

  const onBlur = (e) => {
    let value = e.target.value.trim();
    if (!value) {
      setFocused("");
      setInvalid("invalid");
    }
  };

  const onChange = (e) => {
    let value = e.target.value;
    setValue(value);
    dispatch(updateForm({ value, isValid: true, name }));
    if (required) {
      if (!isValid(value)) {
        dispatch(updateForm({ value, isValid: false, name }));
        setInvalid("invalid");
      } else {
        setInvalid("");
        dispatch(updateForm({ value, isValid: true, name }));
      }
    }
  };
  return (
    <div>
      <label className={`textInput ${lg || "en"}`}>
        <div className={`textInputLabel ${focused}`}>{title[lg]}</div>
        <input
          value={value}
          onChange={onChange}
          className={invalid}
          placeholder={placeholder}
          onFocus={focusHandler}
          onBlur={onBlur}
          type="text"
          name={name}
        />
      </label>
    </div>
  );
};

InputText.propTypes = {
  title: PropTypes.object.isRequired,
  name: PropTypes.string,
  lg: PropTypes.string,
  required: PropTypes.bool,
  hint: PropTypes.bool,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
};

export default InputText;
