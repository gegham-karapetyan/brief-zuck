import React, { useState } from "react";
import PropTypes from "prop-types";
import Calendar from "react-calendar";
import "./style.scss";

const Languages = {
  am: ["ԿՐ", "ԵԿ", "ԵՔ", "ՉՔ", "ՀԳ", "ՈՒԲ", "ՇԲ"],
};
function formatDate(date, lg) {
  let i = date.getDay();
  return Languages[lg][i];
}

const Input1 = (props) => {
  const [value, onChange] = useState(new Date());

  return (
    <Calendar
      onChange={onChange}
      value={value}
      selectRange={false}
      minDate={props.minDate}
      next2Label={null}
      onViewChange={(a) => console.log("ViewChange: ", a)}
      onClickMonth={(a) => console.log("Month: ", a)}
      onDrillUp={(a) => console.log("DrillUp: ", a)}
      onActiveStartDateChange={(date) => {
        console.log("ActiveStartDateChange :", date);

        props.changeMinDate(date.activeStartDate);
      }}
      prev2Label={null}
      //view="month"
      showDoubleView={false}
      showNeighboringMonth={true}
      showNavigation={true}
      formatShortWeekday={(locale, date) => formatDate(date, "am")}
      // tileContent={({ activeStartDate, date, view }) => {
      //   console.log(view);
      // }}

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

Input1.propTypes = {};

export default Input1;
