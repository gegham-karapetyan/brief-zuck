import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { HintText } from "../Hint/Hint";

import "./style.scss";

const InputCheckbox = ({
  name,
  innerText,
  hintText,
  onChange,
  checked,
  invalid,
  lg,
}) => {
  const [active, setActive] = useState([false, 0]);

  const elemRef = useRef();
  const onMouseOver = () => {
    const { left, top } = elemRef.current.getBoundingClientRect();

    setActive([true, left, top]);
  };
  const onMouseLeave = () => {
    setActive([false, 0, 0]);
  };

  return (
    <>
      {hintText && active[0] && (
        <HintText
          additionalClass="hint--checkbox"
          hintText={hintText}
          left={active[1]}
          top={active[2]}
        />
      )}
      <label
        ref={elemRef}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        className={`checkbox ${invalid}`}
        style={{ opacity: checked ? "1" : "0.5" }}
      >
        <span
          className="checkmarkContainer"
          style={{
            backgroundColor: checked ? "black" : "transparent",
          }}
        >
          <span style={checkmark}></span>
        </span>
        <span>{innerText[lg]}</span>

        <input
          type="checkbox"
          onChange={onChange}
          checked={checked}
          name={name}
          style={{ opacity: 0, height: 0, width: 0 }}
        />
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

InputCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  hintText: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  //if there is a checkbox named "Other"
  addNewInput: PropTypes.func,
};

export default InputCheckbox;
