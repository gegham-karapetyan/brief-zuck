import React, { useState, useRef } from "react";
// import PropTypes from 'prop-types'
import Hint from "../Hint/Hint";

import "./style.scss";
import NumberSelect from "./../NumberSelect";

const InputCheckboxPlusNumber = ({
  name,
  title,
  hintText,
  onChange,
  invalid,
  lg,
}) => {
  const [checked, setChecked] = useState(false);
  const onChangeActivity = () => {
    setChecked(!checked);
    onChange({ [name]: checked ? 0 : 1 });
  };

  const onChangeNumber = (val) => {
    onChange({ [name]: val });
  };
  return (
    <>
      <label
        className={`checkbox ${invalid}`}
        style={{ opacity: checked ? "1" : "0.5", width: "100%" }}
      >
        <span
          className="checkmarkContainer"
          style={{
            backgroundColor: checked ? "black" : "transparent",
          }}
        >
          <span style={checkmark}></span>
        </span>
        <span>
          {title}
          {hintText && <Hint hintText={hintText[lg]} />}
        </span>

        <input
          type="checkbox"
          onChange={onChangeActivity}
          checked={checked}
          name={name}
          style={{ opacity: 0, height: 0, width: 0 }}
        />
        <NumberSelect onChange={onChangeNumber} lg={lg} active={checked} />
      </label>
    </>
  );
};
const checkmark = {
  display: "block",
  width: "5px",
  height: "6px",
  borderBottom: "1px solid #feebe1",
  marginTop: "3px",
  marginLeft: "5px",
  borderRight: "1px solid #feebe1",
  transform: "rotate(45deg)",
};

export default InputCheckboxPlusNumber;
