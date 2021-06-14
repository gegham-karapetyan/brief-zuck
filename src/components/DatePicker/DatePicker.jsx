import React, { useState } from "react";
import PropTypes from "prop-types";
import Calendar from "react-calendar";
import InputsPicker from "./InputsPicker";
import PickerNavigation from "./PickerNavigationav";
import { useSelector, useDispatch } from "react-redux";
import {
  CALENDAR_VALUE,
  CALENDAR_ACTIVE_START_DATE,
  updateStartDateInputValue,
  updateEndDateInputValue,
  updateCalendarValue,
} from "../../features/createSliceDataPicker";
import "./stylexx.scss";

const dateParse = (value) => {
  const tmp = value.split(/[/\-\\]/);
  const newDate = new Date();
  newDate.setDate(tmp[0]);
  newDate.setMonth(tmp[1] - 1);
  newDate.setYear(tmp[2]);

  return newDate;
};

const dateToString = (date) => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  return `${day}/${month}/${year}`;
};

const Languages = {
  am: ["ԿՐ", "ԵԿ", "ԵՔ", "ՉՔ", "ՀԳ", "ՈՒԲ", "ՇԲ"],
};
function formatDate(date, lg) {
  let i = date.getDay();
  return Languages[lg][i];
}

const DatePicker = ({ minDate, title, lg }) => {
  const [focused, setFocused] = useState("");

  const activeStartDate = useSelector(CALENDAR_ACTIVE_START_DATE);

  const value = useSelector(CALENDAR_VALUE).map((date) => dateParse(date));

  const dispatch = useDispatch();

  const onChange = (date) => {
    dispatch(updateStartDateInputValue(dateToString(date[0])));
    dispatch(updateEndDateInputValue(dateToString(date[1])));
    dispatch(updateCalendarValue());
  };

  return (
    <div className="custom-calendar">
      <div className={`label ${lg}`}>{title[lg]}</div>
      <div className="data-picker-block">
        <InputsPicker focused={focused} onFocus={setFocused} value={value} />
        {focused && (
          <div className="data-picker">
            <PickerNavigation activeStartDate={dateParse(activeStartDate)} />
            <Calendar
              onClickDay={(value, event) =>
                console.log("clicked value ->", value)
              }
              onChange={onChange}
              activeStartDate={dateParse(activeStartDate)}
              value={value}
              selectRange={true}
              minDate={minDate}
              next2Label={null}
              prev2Label={null}
              showDoubleView={true}
              showNeighboringMonth={true}
              showNavigation={false}
              formatShortWeekday={(locale, date) => formatDate(date, lg)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

DatePicker.propTypes = {};

export default DatePicker;
