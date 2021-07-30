import React, { useState } from "react";
import { useEffect } from "react";
import isDate from "validator/es/lib/isDate";
import { ltrim } from "validator";

import "./style.scss";

const dateParse = (value) => {
  const tmp = value.split(/[/\-\\]/);
  const newDate = new Date();
  newDate.setYear(Number(tmp[2]));
  newDate.setMonth(Number(tmp[1] - 1));
  newDate.setDate(Number(tmp[0]));
  return newDate;
};

const delimiters = /[ \\/\t\-_.]/;

const validCharsInValue = (value) => {
  return /^[\s\d\-_\\/.]*$/gi.test(value);
};

const normailzeDateInput = (date) => {
  console.log("normailzeDateInput");
  return ltrim(date)
    .split(delimiters)
    .map((date) => {
      if (date && Number(date) !== 0 && Number(date) < 10)
        return "0" + Number(date);
      else return date;
    })
    .join("/")
    .replace(/\/+/g, "/");
};

const handleOnChangeEvent = (
  e,

  setNewValue,
  setCalendarDateRange
) => {
  let value = e.target.value;

  if (!validCharsInValue(value) || value.length > 10) {
    return;
  }
  const _canNormalize = () => {
    return value.trim() && delimiters.test(e.nativeEvent.data);
  };

  if (_canNormalize()) {
    value = normailzeDateInput(value);
  }
  setNewValue(value);

  if (
    isDate(value.trim(), {
      format: "DD/MM/YYYY",
      delimiters: ["/"],
      strictMode: true,
    })
  ) {
    setCalendarDateRange(dateParse(value));
  }
};
// Component
const InputText = ({
  onFocus,
  setCalendarDateRange,
  value,
  focused,
  name,
  title,
  lg,
  invalid,
}) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (value) setInputValue(value);
  }, [value]);

  const onChange = (e) => {
    handleOnChangeEvent(e, setInputValue, setCalendarDateRange);
  };
  return (
    <div>
      <label className={`date-input`}>
        <div className={`date-title ${focused}`}>{title[lg]}</div>
        <input
          className={invalid}
          onChange={onChange}
          autoComplete="off"
          placeholder={focused && "DD/MM/YYYY"}
          onFocus={() => onFocus("--focused")}
          type="text"
          value={inputValue}
          name={name}
        />
      </label>
    </div>
  );
};

export default InputText;
