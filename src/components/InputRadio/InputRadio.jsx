import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

const InputRadio = (props) => {
  return (
    <label
      className="inputRadio"
      style={props.checked ? styleChecked : styleUnChecked}
    >
      <span>{props.name}</span>

      <input
        type="checkbox"
        onChange={() => {
          props.onChange(props.name);
        }}
        checked={props.checked}
        name={props.name}
        style={{ opacity: 0, height: 0, width: 0 }}
      />
    </label>
  );
};

const styleChecked = {
  backgroundColor: "black",
  color: "white",
  opacity: 1,
};
const styleUnChecked = {
  backgroundColor: "transparent",
  color: "black",
  opacity: 0.5,
};

InputRadio.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,

  hint: PropTypes.bool,
};

export default InputRadio;
