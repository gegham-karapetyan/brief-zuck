import React, { useState } from "react";
import PropTypes from "prop-types";
import Calendar from "react-calendar";
import InputsPicker from "./InputsPicker";
import PickerNavigation from "./PickerNavigationav";
import { useSelector, useDispatch } from "react-redux";
import {
  CALENDAR_VALUE,
  updateStartDateInputValue,
  updateEndDateInputValue,
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
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const setNextMonth = (date) => {
  if (!date) date = new Date();
  let currnetMonth = date.getMonth();
  let newDate = new Date(date);
  newDate.setMonth(currnetMonth + 1);
  return newDate;
};

const Languages = {
  am: ["ԿՐ", "ԵԿ", "ԵՔ", "ՉՔ", "ՀԳ", "ՈՒԲ", "ՇԲ"],
};
function formatDate(date, lg) {
  let i = date.getDay();
  return Languages[lg][i];
}

const DataPicker = (props) => {
  const [value, setValue] = useState(null);
  const [activeDate, setActiveDate] = useState(new Date());
  const [focused, setFocused] = useState("");
  const activeDateStart = useSelector(CALENDAR_VALUE);

  const dispatch = useDispatch();

  const prevMonth = (e) => {
    e.preventDefault();
    setActiveDate((prev) => {
      let newDate = new Date();
      newDate.setMonth(prev.getMonth() - 1);
      return newDate;
    });
  };
  const nextMonth = (e) => {
    e.preventDefault();

    setActiveDate((prev) => {
      let newDate = new Date();
      newDate.setMonth(prev.getMonth() + 1);
      return newDate;
    });
  };
  const onChange = (date) => {
    console.log("date : ", date);
    dispatch(updateStartDateInputValue(dateToString(date[0])));
    dispatch(updateEndDateInputValue(dateToString(date[1])));
    setValue(date);
  };

  const updateCalendar = (value) => {
    setActiveDate(dateParse(value));
  };
  return (
    <div className="data-picker-block">
      <InputsPicker
        updateCalendar={updateCalendar}
        focused={focused}
        onFocus={setFocused}
        value={value}
      />
      {focused && (
        <div className="data-picker">
          <PickerNavigation
            prevMonth={prevMonth}
            nextMonth={nextMonth}
            activeDate={activeDate}
          />
          <Calendar
            onChange={onChange}
            activeStartDate={dateParse(activeDateStart)}
            value={value}
            //value={dateParse(activeDateStart)}
            selectRange={true}
            minDate={props.minDate}
            next2Label={null}
            // onActiveStartDateChange={(a) => {
            //   console.log("ActiveStartDateChange :", a);
            // }}
            prev2Label={null}
            showDoubleView={true}
            showNeighboringMonth={true}
            showNavigation={false}
            formatShortWeekday={(locale, date) => formatDate(date, "am")}
          />
        </div>
      )}
    </div>
  );
};

DataPicker.propTypes = {};

export default DataPicker;
