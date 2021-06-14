import React, { useState } from "react";
import InputRadio from "../InputRadio";
import { InputRange } from "../InputRC";
import "./style.scss";

const isEqual = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

const reset = { checkedMan: false, checkedWoman: false };

const HyperactiveBuyers = ({ lg, title }) => {
  const [age, setAge] = useState([24, 44]);
  const [checked, setChecked] = useState(reset);

  const onChangeRadio = (name) => {
    if (name === "Men") {
      const newChecked = { checkedMan: true, checkedWoman: false };
      isEqual(checked, newChecked) ? setChecked(reset) : setChecked(newChecked);
    } else {
      const newChecked = { checkedMan: false, checkedWoman: true };
      isEqual(checked, newChecked) ? setChecked(reset) : setChecked(newChecked);
    }
  };

  const onChangeAge = (num) => {
    setAge(num);
  };
  const ageFormated = age.join("-");
  return (
    <div className="HyperactiveBuyerPersona">
      <div className="label">{title[lg][0]}</div>
      <div className="container">
        <InputRadio
          checked={checked.checkedMan}
          onChange={onChangeRadio}
          name="Men"
          title={{
            am: "Տղամարդիկ",
            en: "Men",
            ru: "",
          }}
          lg={lg}
        />
        <InputRadio
          checked={checked.checkedWoman}
          onChange={onChangeRadio}
          name="Women"
          title={{
            am: "Կանայք",
            en: "Women",
            ru: "",
          }}
          lg={lg}
        />

        <div className="ageBlock">
          <div className="age">
            {title[lg][1]}{" "}
            <span className="output">
              {age.join("-")} {title[lg][2]}
            </span>{" "}
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
