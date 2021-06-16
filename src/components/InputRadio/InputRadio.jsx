import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { HintText } from "../Hint/Hint";
import "./style.scss";

const InputRadio = ({
  className,
  hintText,
  checked,
  name,
  lg,
  title,
  onChange,
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
        className={`inputRadio ${className && className}`}
        style={checked ? styleChecked : styleUnChecked}
      >
        <span>{title[lg]}</span>

        <input
          type="checkbox"
          onChange={() => {
            onChange(name);
          }}
          checked={checked}
          name={name}
          style={{ opacity: 0, height: 0, width: 0 }}
        />
      </label>
    </>
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

  hintText: PropTypes.element,
};

export default InputRadio;
