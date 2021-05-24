import React, { useState } from "react";
import "./style.scss";
const AllLg = ["EN", "AM", "RU"];

const Languages = (props) => {
  const [active, setActive] = useState("EN");
  const onClilck = (e) => {
    setActive(e.target.textContent);
  };
  return (
    <div className="languages">
      {AllLg.map((lg) => {
        if (active === lg)
          return (
            <button key={lg} onClick={onClilck} className="active">
              {lg}
            </button>
          );
        else
          return (
            <button key={lg} onClick={onClilck}>
              {lg}
            </button>
          );
      })}
    </div>
  );
};
export default Languages;
