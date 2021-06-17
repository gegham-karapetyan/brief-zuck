import React, { useState } from "react";
import InputRadio from "../InputRadio";
import { useDispatch } from "react-redux";
import { updateForm } from "../../features/createSliceForm";
import { InputRange } from "../InputRC";
import getTrueKey from "../../utils/getTrueKey";
import "./style.scss";

const isEqual = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

const reset = { Men: false, Women: false };

const HyperactiveBuyers = ({ lg, title, name }) => {
  const dispatch = useDispatch();
  const [age, setAge] = useState([24, 44]);
  const [checked, setChecked] = useState(reset);
  const [disabled, setDisabled] = useState(true);

  const onChangeRadio = (genderType) => {
    const newChecked = { ...reset, [genderType]: true };

    if (isEqual(checked, newChecked)) {
      setDisabled(true);
      setChecked(reset);
      dispatch(updateForm({ value: "", name, isValid: true }));
    } else {
      setDisabled(false);
      setChecked(newChecked);
      dispatch(
        updateForm({
          value: `${getTrueKey(newChecked)} ${age.join("-")} age`,
          name,
          isValid: true,
        })
      );
    }
  };

  const onChangeAge = (age) => {
    setAge(age);
  };
  const onAfterChange = (age) => {
    dispatch(
      updateForm({
        value: `${getTrueKey(checked)} ${age.join("-")} age`,
        name,
        isValid: true,
      })
    );
  };

  const ageFormated = age.join("-");
  return (
    <div className="HyperactiveBuyerPersona">
      <div className="label">{title[lg][0]}</div>
      <div className="container">
        <InputRadio
          checked={checked.Men}
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
          checked={checked.Women}
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
            <InputRange
              onAfterChange={onAfterChange}
              disabled={disabled}
              onChange={onChangeAge}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HyperactiveBuyers;
