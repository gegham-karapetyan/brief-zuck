import React, { useState } from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Languages = {
  am: ["ԿՐ", "ԵԿ", "ԵՔ", "ՉՔ", "ՀԳ", "ՈՒԲ", "ՇԲ"],
};
function formatDate(date, lg) {
  let i = date.getDay();
  return Languages[lg][i];
}

const PickerNavigation = ({ prevMonth, nextMonth, activeDate }) => {
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
        <span className="nav-label">{activeDate.getMonth()}</span>
      </div>
      <div className="next-nav-label">
        <span className="nav-label">{activeDate.getMonth()}</span>
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
