import React, { useState } from "react";
import { InputSlider, InputRange } from "../../InputRC";
import "./style.scss";

const SubGroupWoman = (props) => {
  const [age, setAge] = useState([24, 44]);

  const onChangeAge = (num) => {
    setAge(num);
  };
  const ageFormated = age.join("-");

  return (
    <div className="subgroup woman">
      <div className="gender">
        Կանայք՝ <span className="output">{props.currentPoint} %</span>
        <input type="hidden" name="Woman" value={props.currentPoint} />
      </div>
      <div className="percentage">
        <InputSlider value={props.currentPoint} onChange={props.onChange} />
      </div>
      <div className="age">
        Տարիք՝ <span className="output">{age.join("-")} տ․</span>{" "}
        <input type="hidden" name="Man Age" value={ageFormated} />
      </div>
      <div className="gender-age">
        <InputRange onChange={onChangeAge} />
      </div>
    </div>
  );
};

export default SubGroupWoman;
