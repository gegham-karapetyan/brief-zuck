import React from "react";
import { InputSlider, InputRange } from "../../InputRC";
import "./style.scss";

const SubGroupWoman = ({
  percentage,
  onChangeAge,
  onChangePercentage,
  title,
  lg,
  name,
  age,
  onAfterChange,
}) => {
  const ageFormated = age.join("-");

  return (
    <div className="subgroup woman">
      <div className="gender">
        {title[lg][0]} <span className="output">{percentage} %</span>
        <input type="hidden" name="Woman" value={percentage} />
      </div>
      <div className="percentage">
        <InputSlider
          onAfterChange={onAfterChange}
          value={percentage}
          onChange={onChangePercentage}
        />
      </div>
      <div className="age">
        {title[lg][1]}{" "}
        <span className="output">
          {age.join("-")} {title[lg][2]}
        </span>{" "}
        <input type="hidden" name="Man Age" value={ageFormated} />
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

export default SubGroupWoman;
