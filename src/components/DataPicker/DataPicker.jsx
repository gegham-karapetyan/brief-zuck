import React, { useState } from "react";
import PropTypes from "prop-types";

import Input1 from "./Input1";
import Input2 from "./Input1";
//import "react-calendar/dist/Calendar.css";
import "./stylexx.scss";

const DataPicker = (props) => {
  const [minDate2, changeMinDate2] = useState(new Date());
  const a = (date) => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() + 1);
    //console.log("date", date.getMonth());
    // date.setMonth(date.getMonth() + 1);
    changeMinDate2(newDate);
  };
  const b = (d) => {
    console.log("d :::: ", d);
  };
  console.log("value1 ", minDate2);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Input1 minDate={new Date()} changeMinDate={a} />
      <Input2 minDate={minDate2} changeMinDate={b} />
    </div>
  );
};

DataPicker.propTypes = {};

export default DataPicker;
