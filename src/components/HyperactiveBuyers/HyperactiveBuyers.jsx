import React, { useState, useEffect } from "react";
import InputRadio from "../InputRadio";
import { useDispatch } from "react-redux";
import {
  updateForm,
  setFieldName,
} from "../../features/reduxSlices/createSliceForm";
import { InputRange } from "../InputRC";
import getTrueKey from "../../utils/getTrueKey";
import createIdByName from "../../utils/createIdByName";
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

  const onChangeRadio = (e) => {
    const genderType = e.target.name;
    const newChecked = { ...reset, [genderType]: true };

    if (isEqual(checked, newChecked)) {
      setDisabled(true);
      setChecked(reset);
      dispatch(
        updateForm({
          value: "",
          keyName: name.en,
          name: name[lg],
          isValid: true,
        })
      );
    } else {
      setDisabled(false);
      setChecked(newChecked);
      dispatch(
        updateForm({
          value: `${getTrueKey(newChecked)} ${age.join("-")} age`,
          keyName: name.en,
          name: name[lg],
          isValid: true,
        })
      );
    }
  };
  const id = createIdByName(name.en);
  const onChangeAge = (age) => {
    setAge(age);
  };
  const onAfterChange = (age) => {
    dispatch(
      updateForm({
        value: `${getTrueKey(checked)} ${age.join("-")} age`,
        keyName: name.en,
        name: name[lg],
        isValid: true,
      })
    );
  };
  useEffect(() => {
    dispatch(
      setFieldName({
        keyName: name.en,
        name: name[lg],
        id,
      })
    );
  }, [name, id, lg, dispatch]);

  const ageFormated = age.join("-");
  return (
    <div className="field field-range" id={id}>
      <div className={`field-title field-range__title`}>{title[lg][0]}</div>
      <div className="container">
        <InputRadio
          checked={checked.Men}
          onChange={onChangeRadio}
          name="Men"
          innerText={{
            am: "Տղամարդիկ",
            en: "Men",
            ru: "Мужчины",
          }}
          lg={lg}
        />
        <InputRadio
          checked={checked.Women}
          onChange={onChangeRadio}
          name="Women"
          innerText={{
            am: "Կանայք",
            en: "Women",
            ru: "Женщины",
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
