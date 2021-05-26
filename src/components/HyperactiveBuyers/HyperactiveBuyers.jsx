import React, { useState } from "react";
import InputRadio from "../InputRadio";
import { InputRange } from "../InputRC";
import "./style.scss";

const HyperactiveBuyers = (props) => {
  const [age, setAge] = useState([24, 44]);
  const [checked, setChecked] = useState({
    checkedMan: false,
    checkedWoman: false,
  });

  const onChangeRadio = (name) => {
    if (name === "Տղամարդիկ") {
      setChecked({ checkedMan: true, checkedWoman: false });
    } else {
      setChecked({ checkedMan: false, checkedWoman: true });
    }
  };

  const onChangeAge = (num) => {
    setAge(num);
  };
  const ageFormated = age.join("-");
  return (
    <div className="HyperactiveBuyerPersona">
      <div className="label">Hyperactive buyer persona</div>
      <div className="container">
        <InputRadio
          checked={checked.checkedMan}
          onChange={onChangeRadio}
          name="Տղամարդիկ"
        />
        <InputRadio
          checked={checked.checkedWoman}
          onChange={onChangeRadio}
          name="Կանայք"
        />

        <div className="ageBlock">
          <div className="age">
            Տարիք՝ <span className="output">{age.join("-")} տ․</span>{" "}
            <input type="hidden" name="Man Age" value={ageFormated} />
          </div>
          <div className="gender-age">
            <InputRange onChange={onChangeAge} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HyperactiveBuyers;
