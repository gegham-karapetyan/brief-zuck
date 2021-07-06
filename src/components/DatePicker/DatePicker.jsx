import React, { useState, useEffect } from "react";

import { updateForm, setFieldName } from "../../features/createSliceForm";

import Calendar from "react-calendar";
import InputsPicker from "./InputsPicker";
import PickerNavigation from "./PickerNavigationav";
import { useDispatch } from "react-redux";

import "./style.scss";

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
  const [dateRange, setDateRange] = useState({ start: null, end: null });

  const dispatch = useDispatch();

  const updateCalendarActiveStartDate = (date) => {
    setActiveStartDate(date);
  };

  const setCalendarFirstDateRange = (date) => {
    date = date < new Date() ? new Date() : date;
    const { end } = dateRange;
    if (end && end <= date) date = end;

    setActiveStartDate(date);
    setDateRange((prev) => ({
      ...prev,
      start: date,
    }));
  };
  const setCalendarSecondDateRange = (date) => {
    const month = date.getMonth();
    let endDate = new Date(date);
    date.setMonth(month - 1);
    const { start } = dateRange;
    if (start && endDate <= start) endDate = start;
    else {
      setActiveStartDate(date);
    }
    setDateRange((prev) => ({
      ...prev,
      end: endDate,
    }));
  };
  function defineRangeValue(dateRange) {
    const value = Object.values(dateRange).filter(Boolean);
    const range = [dateRange.start, dateRange.end];
    dispatch(
      updateForm({
        value: range.map((date) => date && date.toString()),
        keyName: name.en,
        isValid: value.length === 2,
      })
    );
    if (value.length === 1) return value[0];
    else if (value.length === 2) return range;
    else return [];
  }

  const setDateRangeAsObject = (arr) => {
    dispatch(
      updateForm({
        value: arr.map((date) => date.toString()),
        keyName: name.en,
        isValid: arr.length === 2,
      })
    );

    setDateRange({ start: arr[0], end: arr[1] });
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
          dateRange={dateRange}
        />
        {focused && (
          <div className="data-picker">
            <PickerNavigation
              lg={lg}
              activeStartDate={activeStartDate}
              updateCalendarActiveStartDate={updateCalendarActiveStartDate}
            />
            <Calendar
              onChange={setDateRangeAsObject}
              activeStartDate={activeStartDate}
              value={defineRangeValue(dateRange)}
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
