import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  updateStartDateInputValue,
  updateEndDateInputValue,
  updateCalendarValue,
  INPUT_START_VALUE,
  INPUT_END_VALUE,
} from "../../../features/createSliceDataPicker";

import InputPicker from "./InputPicker";
import "./style.scss";
import { useSelector } from "react-redux";

const InputsPicker = ({ onFocus, focused }) => {
  const startValue = useSelector(INPUT_START_VALUE);
  const endValue = useSelector(INPUT_END_VALUE);

  return (
    <div className="input-block">
      <InputPicker
        updateValue={updateStartDateInputValue}
        value={startValue}
        name="Մեկնարկ"
        // value={value}
        focused={focused}
        onFocus={onFocus}
        updateCalendar={updateCalendarValue}
      />
      <InputPicker
        updateValue={updateEndDateInputValue}
        value={endValue}
        onFocus={onFocus}
        name="Ավարտ"
        // value={value}
        focused={focused}
        updateCalendar={updateCalendarValue}
      />
    </div>
  );
};
export default InputsPicker;
