import React, { useState } from "react";
import isDate from "validator/es/lib/isDate";
import PropTypes from "prop-types";
import "./style.scss";

const InputText = (props) => {
  const [focused, setFocused] = useState("");

  const [value, setValue] = useState(props.value || "");
  console.log("value ::: ", value);
  const onFocus = () => {
    if (props.onFocus) props.onFocus(true);
    setFocused("focused");
  };
  const onBlur = (e) => {
    console.log(props);
    if (!e.target.value.trim()) setFocused("");
  };

  const onChange = (e) => {
    let value = e.target.value;
    setValue(value);
    if (isDate(value, { format: "DD/MM/YYYY", delimiters: ["/", "\\", "-"] })) {
      props.updateCalendar(value);
    }
  };
  return (
    <div>
      <label className={`textInput ${props.lg || "en"}`}>
        <div className={`textInputLabel ${focused}`}>{props.name}</div>
        <input
          onChange={onChange}
          placeholder={focused && "DD/MM/YYYY"}
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
