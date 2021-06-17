import React, { useState } from "react";

import PropTypes from "prop-types";
import {
  updateStartDateInputValue,
  updateEndDateInputValue,
  updateCalendarActiveStartDate,
  updateCalendarValue,
  INPUT_START_VALUE,
  INPUT_END_VALUE,
} from "../../../features/createSliceDataPicker";

import InputPicker from "./InputPicker";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";

const InputsPicker = ({ onFocus, focused, lg }) => {
  const startValue = useSelector(INPUT_START_VALUE);
  const endValue = useSelector(INPUT_END_VALUE);
  const dispatch = useDispatch();

  const updateCalendar = (v) => {
    console.log("dfsgdfgsdf", v);
    dispatch(updateCalendarValue());
  };

  const updateStartDate = (value) => {
    dispatch(updateStartDateInputValue(value));
  };
  const updateEndDate = (value) => {
    dispatch(updateEndDateInputValue(value));
  };
  const updateCalendarActivStartValue = (value) => {
    dispatch(updateCalendarActiveStartDate(value));
  };

  return (
    <div className="input-block">
      <InputPicker
        updateValue={updateStartDate}
        updateCalendarActivStartValue={updateCalendarActivStartValue}
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
        updateCalendar={updateCalendar}
      />
      <InputPicker
        updateValue={updateEndDate}
        updateCalendarActivStartValue={updateCalendarActivStartValue}
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
        updateCalendar={updateCalendar}
      />
    </div>
  );
};
export default InputsPicker;
