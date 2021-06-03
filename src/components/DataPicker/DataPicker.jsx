import React from "react";
import PropTypes from "prop-types";
import Calendar from "react-calendar";
//import "react-calendar/dist/Calendar.css";
import "./style.scss";

const Languages = {
  am: ["ԿՐ", "ԵԿ", "ԵՔ", "ՉՔ", "ՀԳ", "ՈՒԲ", "ՇԲ"],
};

function formatDate(date, lg) {
  let i = date.getDay();
  return Languages[lg][i];
}

const DataPicker = (props) => {
  return (
    <Calendar
      returnValue="range"
      selectRange={true}
      minDate={new Date()}
      next2Label={null}
      prev2Label={null}
      showDoubleView={true}
      formatShortWeekday={(locale, date) => formatDate(date, "am")}
      tileContent={({ activeStartDate, date, view }) => {
        console.log(view);
      }}
      nextLabel={
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
      }
      prevLabel={
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
      }
    />
  );
};

DataPicker.propTypes = {};

export default DataPicker;
