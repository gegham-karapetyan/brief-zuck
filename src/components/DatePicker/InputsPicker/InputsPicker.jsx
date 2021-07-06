import React from "react";

import InputPicker from "./InputPicker";
import "./style.scss";

const dateToString = (date) => {
  if (date instanceof Date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;
    return `${day}/${month}/${year}`;
  } else return "";
};

const InputsPicker = ({
  onFocus,
  focused,
  lg,
  dateRange,
  setCalendarFirstDateRange,
  setCalendarSecondDateRange,
}) => {
  return (
    <div className="input-block">
      <InputPicker
        setCalendarDateRange={setCalendarFirstDateRange}
        value={dateToString(dateRange.start)}
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
        value={dateToString(dateRange.end)}
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
