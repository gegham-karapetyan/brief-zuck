import React, { useRef, useState } from "react";
import hintIcon from "../../info_black_24dp.svg";
import "./style.scss";

export const HintText = ({ hintText, left, top, additionalClass }) => {
  return (
    <div
      className={`hintText ${additionalClass ? additionalClass : ""}`}
      style={{ left: left + "px", top: top - 20 + "px" }}
    >
      <div>{hintText}</div>
      <div className="tail"></div>
    </div>
  );
};

const Hint = (props) => {
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
    <span className="hint" ref={elemRef}>
      <img
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        src={hintIcon}
        width="60%"
        alt="hint"
      />
      {active[0] && (
        <HintText left={active[1]} top={active[2]} hintText={props.hintText} />
      )}
    </span>
  );
};

export default Hint;
