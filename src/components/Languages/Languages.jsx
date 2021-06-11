import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../features/createSliceLanguages";
import "./style.scss";
const AllLg = ["EN", "AM", "RU"];

const Languages = (props) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState("EN");
  const onClilck = (e) => {
    const lg = e.target.textContent;
    setActive(lg);
    dispatch(setLanguage(lg.toLowerCase()));
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
