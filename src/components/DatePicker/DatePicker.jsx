import React, { useState, useEffect } from "react";

import { updateForm, setFieldName } from "../../features/createSliceForm";

import Calendar from "react-calendar";
import InputsPicker from "./InputsPicker";
import PickerNavigation from "./PickerNavigationav";
import { useDispatch } from "react-redux";

import "./style.scss";

// const dateParse = (value) => {
//   const tmp = value.split(/[/\-\\]/);
//   const newDate = new Date();
//   newDate.setDate(tmp[0]);
//   newDate.setMonth(tmp[1] - 1);
//   newDate.setYear(tmp[2]);

//   return newDate;
// };

// const dateToString = (date) => {
//   let day = date.getDate();
//   let month = date.getMonth() + 1;
//   let year = date.getFullYear();

//   if (day < 10) day = "0" + day;
//   if (month < 10) month = "0" + month;
//   return `${day}/${month}/${year}`;
// };

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

  const dispatch = useDispatch();
  if (dateRange.length === 2) {
    dispatch(
      updateForm({
        value: dateRange.map((date) => date.toString()),
        keyName: name.en,

        isValid: dateRange.length === 2,
      })
    );
  } else {
    dispatch(
      updateForm({
        value: [],
        keyName: name.en,

        isValid: dateRange.length === 2,
      })
    );
  }

  const updateCalendarActiveStartDate = (date) => {
    setActiveStartDate(date);
  };

  const setCalendarFirstDateRange = (date) => {
    setActiveStartDate(date);
    if (dateRange.length === 2) {
      setDateRange((prev) => {
        let newDate = prev.slice();
        newDate[0] = date;
        return newDate;
      });
    } else setDateRange(date);
  };
  const setCalendarSecondDateRange = (date) => {
    if (dateRange.length === 2) {
      setDateRange((prev) => {
        let newDate = prev.slice();
        newDate[1] = date;
        return newDate;
      });
    } else setDateRange((prev) => [prev, date]);
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
          setCalendarFirstDateRange={setCalendarFirstDateRange}
          setCalendarSecondDateRange={setCalendarSecondDateRange}
          onFocus={setFocused}
          values={dateRange}
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
              allowPartialRange={true}
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
