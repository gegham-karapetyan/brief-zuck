import React, { useState, useEffect } from "react";

import { updateForm, setFieldName } from "../../features/createSliceForm";

import Calendar from "react-calendar";
import InputsPicker from "./InputsPicker";
import PickerNavigation from "./PickerNavigationav";
import { useSelector, useDispatch } from "react-redux";
// import {
//   CALENDAR_VALUE,
//   CALENDAR_ACTIVE_START_DATE,
//   updateStartDateInputValue,
//   updateEndDateInputValue,
//   updateCalendarValue,
// } from "../../features/createSliceDataPicker";
import "./style.scss";

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
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  ru: ["ԿՐ", "ԵԿ", "ԵՔ", "ՉՔ", "ՀԳ", "ՈՒԲ", "ՇԲ"],
};
function formatDate(date, lg) {
  let i = date.getDay();
  return Languages[lg][i];
}

const DatePicker = ({ title, lg, name }) => {
  const [focused, setFocused] = useState("");
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  const [dateRange, setDateRange] = useState([]);

  //const activeStartDate = useSelector(CALENDAR_ACTIVE_START_DATE);
  console.log("activeStartDate", activeStartDate);

  //const value = useSelector(CALENDAR_VALUE).map((date) => dateParse(date));

  console.log("value", dateRange);
  const dispatch = useDispatch();
  dispatch(
    updateForm({
      value: dateRange.map((date) => date.toString()),
      keyName: name.en,
      name: name[lg],
      isValid: !!dateRange.length,
    })
  );

  // const onChange = (date) => {
  //   dispatch(updateStartDateInputValue(dateToString(date[0])));
  //   dispatch(updateEndDateInputValue(dateToString(date[1])));
  //   dispatch(updateCalendarValue());
  // };

  const updateCalendarActiveStartDate = (date) => {
    setActiveStartDate(date);
  };

  useEffect(() => {
    dispatch(
      setFieldName({
        keyName: name.en,
        name: name[lg],
      })
    );
  }, [name, lg, dispatch]);

  return (
    <div className="custom-calendar">
      <div className={`label ${lg}`}>{title[lg]}</div>
      <div className="data-picker-block">
        <InputsPicker
          lg={lg}
          focused={focused}
          setDateRange={setDateRange}
          dateRange={dateRange}
          onFocus={setFocused}
          value={dateRange}
        />
        {focused && (
          <div className="data-picker">
            <PickerNavigation
              lg={lg}
              activeStartDate={activeStartDate}
              updateCalendarActiveStartDate={updateCalendarActiveStartDate}
            />
            <Calendar
              onChange={setDateRange}
              activeStartDate={activeStartDate}
              value={dateRange}
              selectRange={true}
              minDate={new Date()}
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
