import React, { useState } from "react";
import PropTypes from "prop-types";

import InputPicker from "./InputPicker";
import "./style.scss";

const InputsPicker = ({ onFocus, value, updateCalendar }) => {
  return (
    <div className="input-block">
      <InputPicker
        name="Մեկնարկ"
        value={value}
        onFocus={onFocus}
        updateCalendar={updateCalendar}
      />
      <InputPicker
        name="Ավարտ"
        value={value}
        onFocus={onFocus}
        updateCalendar={updateCalendar}
      />
    </div>
  );
};
export default InputsPicker;
