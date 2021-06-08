import React, { useState } from "react";
import isDate from "validator/es/lib/isDate";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import "./style.scss";

const InputText = (props) => {
  const dispatch = useDispatch();

  const onFocus = () => {
    props.onFocus("focused");
  };
  const onBlur = (e) => {
    // if (!e.target.value.trim()) setFocused("");
  };
  const value = props.value;

  const onChange = (e) => {
    let value = e.target.value;

    dispatch(props.updateValue(value));

    // setValue(value);
    if (isDate(value, { format: "DD/MM/YYYY", delimiters: ["/", "\\", "-"] })) {
      dispatch(props.updateCalendar(value));
    }
  };
  return (
    <div>
      <label className={`textInput ${props.lg || "en"}`}>
        <div className={`textInputLabel ${props.focused}`}>{props.name}</div>
        <input
          onChange={onChange}
          placeholder={props.focused && "DD/MM/YYYY"}
          onFocus={onFocus}
          onBlur={onBlur}
          type="text"
          value={value}
          name={props.name}
        />
      </label>
    </div>
  );
};

export default InputText;
