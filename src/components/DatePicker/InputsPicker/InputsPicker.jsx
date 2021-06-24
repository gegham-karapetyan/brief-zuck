import React from "react";

import InputPicker from "./InputPicker";
import "./style.scss";

const dateToString = (date) => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  return `${day}/${month}/${year}`;
};

const InputsPicker = ({
  onFocus,
  focused,
  lg,
  values,
  setCalendarFirstDateRange,
  setCalendarSecondDateRange,
}) => {
  let startValue = "";
  let endValue = "";
  if (values.length === 2) {
    startValue = dateToString(values[0]);
    endValue = dateToString(values[1]);
  }

  return (
    <div className="input-block">
      <InputPicker
        setCalendarDateRange={setCalendarFirstDateRange}
        value={startValue}
        title={{
          am: "Մեկնարկ",
          en: "Start",
          ru: "",
        }}
        lg={lg}
        name="Start"
        focused={focused}
        onFocus={onFocus}
      />
      <InputPicker
        setCalendarDateRange={setCalendarSecondDateRange}
        value={endValue}
        onFocus={onFocus}
        title={{
          am: "Ավարտ",
          en: "End",
          ru: "",
        }}
        lg={lg}
        name="End"
        focused={focused}
      />
    </div>
  );
};
export default InputsPicker;
