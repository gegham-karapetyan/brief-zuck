import React from "react";
import { InputSlider, InputRange } from "../../InputRC";
import "./style.scss";

const SubGroupMan = ({
  percentage,
  onChangeAge,
  onChangePercentage,
  title,
  lg,
  name,
  age,
  onAfterChange,
  invalid,
}) => {
  const ageFormated = age.join("-");
  return (
    <div className={`subgroup man ${invalid}`}>
      <div className="gender">
        {title[lg][0]} <span className="output">{percentage} %</span>
        <input type="hidden" name="man" value={percentage} />
      </div>
      <div className="percentage">
        <InputSlider
          onAfterChange={onAfterChange}
          value={percentage}
          onChange={onChangePercentage}
        />
      </div>
      <div className="age">
        {title[lg][1]}
        <span className="output">
          {ageFormated} {title[lg][2]}
        </span>
        <input type="hidden" name="man age" value={ageFormated} />
      </div>
      <div className="gender-age">
        <InputRange
          onAfterChange={onAfterChange}
          onChange={(val) => onChangeAge({ [name]: val })}
        />
      </div>
    </div>
  );
};

export default SubGroupMan;
