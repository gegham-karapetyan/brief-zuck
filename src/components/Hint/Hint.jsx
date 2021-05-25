import React, { useState } from "react";
import hintIcon from "../../info_black_24dp.svg";
import "./style.scss";

export const HintText = (text) => {
  return <div className="hintText">{text}</div>;
};

const Hint = (props) => {
  const [active, setActive] = useState(false);
  const onMouseOver = () => {
    setActive(true);
  };
  const onMouseLeave = () => {
    setActive(false);
  };

  return (
    <span className="hint">
      <img
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        src={hintIcon}
        width="60%"
        alt="hint"
      />
      {active && HintText("somet ext")}
    </span>
  );
};

export default Hint;
