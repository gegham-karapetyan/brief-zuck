import React from "react";
import isDate from "validator/es/lib/isDate";

import "./style.scss";

const InputText = ({
  onFocus,
  updateValue,
  value,
  updateCalendar,
  updateCalendarActivStartValue,
  focused,
  name,
  title,
  lg,
}) => {
  // const onFocus = () => {
  //   props.onFocus("focused");
  // };

  // const value = props.value;

  const onChange = (e) => {
    let value = e.target.value;

    updateValue(value);

    if (
      isDate(value, {
        format: "DD/MM/YYYY",
        delimiters: ["/", "\\", "-"],
        strictMode: true,
      })
    ) {
      updateCalendar(value);
      updateCalendarActivStartValue(value);
    }
  };
  return (
    <div>
      <label className={`textInput`}>
        <div className={`textInputLabel ${focused}`}>{title[lg]}</div>
        <input
          onChange={onChange}
          autoComplete="off"
          placeholder={focused && "DD/MM/YYYY"}
          onFocus={() => onFocus("focused")}
          type="text"
          value={value}
          name={name}
        />
      </label>
    </div>
  );
};

export default InputText;
