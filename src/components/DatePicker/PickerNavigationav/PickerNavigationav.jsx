import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateCalendarActiveStartDate } from "../../../features/createSliceDataPicker";

import "./style.scss";

const MONTH = [
  "Հունվար",
  "Փետրվար",
  "Մարտ",
  "Ապրիլ",
  "Մայիս",
  "Հունիս",
  "Հուլիս",
  "Օգոստոս",
  "Սեպտեմբեր",
  "Հոկտեմբեր",
  "Նոյեմբեր",
  "Դեկտեմբեր",
];

const dateToString = (date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

function formatCurrentDate(date, lg) {
  date = new Date(date);
  let i = date.getMonth();
  return MONTH[i] + " " + date.getFullYear();
}
function formatNextDate(date, lg) {
  date = new Date(date);
  date.setMonth(date.getMonth() + 1);
  let i = date.getMonth();
  return MONTH[i] + " " + date.getFullYear();
}

const PickerNavigation = ({ activeStartDate }) => {
  const dispatch = useDispatch();

  const prevMonth = (e) => {
    e.preventDefault();

    let newDate = new Date(activeStartDate);
    newDate.setMonth(activeStartDate.getMonth() - 1);
    dispatch(updateCalendarActiveStartDate(dateToString(newDate)));
  };
  const nextMonth = (e) => {
    e.preventDefault();

    let newDate = new Date(activeStartDate);
    newDate.setMonth(activeStartDate.getMonth() + 1);
    dispatch(updateCalendarActiveStartDate(dateToString(newDate)));
  };

  return (
    <div className="navigation-block">
      <div className="prev-nav-label">
        <button onClick={prevMonth}>
          <div
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderLeft: "1px solid black",
              borderBottom: "1px solid black",
              transform: "rotate(45deg)",
            }}
          ></div>
        </button>
        <span className="nav-label">{formatCurrentDate(activeStartDate)}</span>
      </div>
      <div className="next-nav-label">
        <span className="nav-label">{formatNextDate(activeStartDate)}</span>
        <button onClick={nextMonth}>
          <div
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderRight: "1px solid black",
              borderTop: "1px solid black",
              transform: "rotate(45deg)",
            }}
          ></div>
        </button>
      </div>
    </div>
  );
};

export default PickerNavigation;