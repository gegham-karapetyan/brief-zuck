import React, { useState } from "react";
import { InputSlider, InputRange } from "../../InputRC";
import "./style.scss";

const SubGroupMan = ({ currentPoint, onChange, title, lg }) => {
  const [age, setAge] = useState([24, 44]);

  const onChangeAge = (num) => {
    setAge(num);
  };
  const ageFormated = age.join("-");
  return (
    <div className="subgroup man">
      <div className="gender">
        {title[lg][0]} <span className="output">{currentPoint} %</span>
        <input type="hidden" name="man" value={currentPoint} />
      </div>
      <div className="percentage">
        <InputSlider value={currentPoint} onChange={onChange} />
      </div>
      <div className="age">
        {title[lg][1]}
        <span className="output">
          {ageFormated} {title[lg][2]}
        </span>
        <input type="hidden" name="man age" value={ageFormated} />
      </div>
      <div className="gender-age">
        <InputRange onChange={onChangeAge} />
      </div>
    </div>
  );
};

export default SubGroupMan;
