import React from "react";
import PropTypes from "prop-types";
import Buttons from "./Buttons";
import "./style.scss";

const date = new Date();

const test = (props) => {
  return (
    <div className="r-date-picker">
      <div className="r-date-picker__navigation"></div>
      <div className="r-date-picker__viewContainer">
        <div className="r-date-picker__monthView">
          <div className="r-date-picker__monthView__weekdays"></div>
          <div className="r-date-picker__monthView__days"></div>
        </div>
        <div className="r-date-picker__monthView">
          <div className="r-date-picker__monthView__weekdays"></div>
          <div className="r-date-picker__monthView__days"></div>
        </div>
      </div>
    </div>
  );
};

test.propTypes = {};

export default test;
