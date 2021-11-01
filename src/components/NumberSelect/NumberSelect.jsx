import React, { useState, useEffect } from "react";
import minus from "../../minus-sign.svg";
import plus from "../../plus-sign.svg";
import PropTypes from "prop-types";
import "./style.scss";

const text = {
  am: "Քանակ",
  ru: "Количество",
  en: "Quantity",
};

const NumberSelect = ({ active, lg, onChange }) => {
  const [value, setValue] = useState(0);

  const inc = (e) => {
    if (active) {
      let newValue = value >= 99 ? 99 : value + 1;
      setValue(newValue);
      onChange(newValue);
    }
  };
  const dec = (e) => {
    if (active) {
      let newValue = value <= 1 ? 1 : value - 1;
      setValue(newValue);
      onChange(newValue);
    }
  };
  useEffect(() => {
    if (!active) {
      setValue(0);
    } else setValue(1);
  }, [active]);
  return (
    <div style={{ flexGrow: 1 }}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
        className="number-select"
      >
        <div style={{ paddingRight: "17px" }}>{text[lg]}</div>

        <img className="number-select__inc" onClick={dec} src={minus} alt="-" />

        <div className="number-select__input-place">{value}</div>

        <img className="number-select__dec" onClick={inc} src={plus} alt="+" />
      </div>
    </div>
  );
};

export default NumberSelect;
