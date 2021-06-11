import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { HintText } from "../Hint/Hint";
import "./style.scss";

const InputRadio = (props) => {
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
      {props.hintText && active[0] && (
        <HintText
          additionalClass="hint--radio"
          hintText={props.hintText}
          left={active[1]}
          top={active[2]}
        />
      )}
      <label
        ref={elemRef}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        className={`inputRadio ${props.className && props.className}`}
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
