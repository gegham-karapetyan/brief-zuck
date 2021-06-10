import React, { useRef, useState } from "react";
import hintIcon from "../../info_black_24dp.svg";
import "./style.scss";

export const HintText = ({ text, left, bottom }) => {
  return (
    <div className="hintText" style={{ left: left + "px", top: bottom + "px" }}>
      <div>{text}</div>
      <div className="tail"></div>
    </div>
  );
};

const Hint = (props) => {
  const [active, setActive] = useState([false, 0]);
  const elemRef = useRef();
  const onMouseOver = () => {
    const { left, bottom } = elemRef.current.getBoundingClientRect();
    console.log(elemRef.current.getBoundingClientRect());
    setActive([true, left, bottom]);
  };
  const onMouseLeave = () => {
    setActive([false, 0, 0]);
  };

  return (
    <span className="hint" ref={elemRef}>
      <img
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        src={hintIcon}
        width="60%"
        alt="hint"
      />
      {active[0] && (
        <HintText left={active[1]} bottom={active[2]} text={props.hintText} />
      )}
    </span>
  );
};

export default Hint;
