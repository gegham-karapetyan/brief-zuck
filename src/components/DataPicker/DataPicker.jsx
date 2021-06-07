import React, { useState } from "react";
import PropTypes from "prop-types";
import Calendar from "react-calendar";
import InputsPicker from "./InputsPicker";
import PickerNavigation from "./PickerNavigationav";
import "./stylexx.scss";

const dateParse = (value) => {
  const tmp = value.split(/[/\-\\]/);
  const newDate = new Date();
  newDate.setDate(tmp[0]);
  newDate.setMonth(tmp[1] - 1);
  newDate.setYear(tmp[2]);

  return newDate;
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
  const [value, onChange] = useState(null);
  const [activeDate, setActiveDate] = useState(new Date());
  const [focused, setFocused] = useState(false);

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

  const updateCalendar = (value) => {
    setActiveDate(dateParse(value));
  };
  return (
    <div className="data-picker-block">
      <InputsPicker
        updateCalendar={updateCalendar}
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
            activeStartDate={activeDate}
            value={value}
            selectRange={true}
            minDate={props.minDate}
            next2Label={null}
            onViewChange={(a) => console.log("ViewChange: ", a)}
            onClickMonth={(a) => console.log("Month: ", a)}
            onDrillUp={(a) => console.log("DrillUp: ", a)}
            onActiveStartDateChange={(a) => {
              console.log("ActiveStartDateChange :", a);
            }}
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
