import React, { useState, useEffect } from "react";
import SubGroupMan from "./SubGroupMan";
import SubGroupWoman from "./SubGroupWoman";
import { useDispatch, useSelector } from "react-redux";
import {
  updateForm,
  setFieldName,
} from "../../features/reduxSlices/createSliceForm";
import createIdByName from "../../utils/createIdByName";
import "./style.scss";

const TargetGroup = ({ title, lg, name }) => {
  const dispatch = useDispatch();

  const [percentage, setPercentage] = useState({ man: 50, woman: 50 });
  const [age, setAge] = useState({ man: [24, 44], woman: [24, 44] });
  const [invalid, setInvalid] = useState("");

  const onChangePercentageMan = (num) => {
    const newData = { man: num, woman: 100 - num };
    setPercentage(newData);
  };
  const wasCheckedBySubmitButton = useSelector(
    (state) => state.form[name.en].wasCheckedBySubmitButton
  );
  const isFinallyValid = useSelector((state) => state.form[name.en].isValid);

  const id = createIdByName(name.en);
  const onChangePercentageWoman = (num) => {
    const newData = { man: 100 - num, woman: num };
    setPercentage(newData);
  };

  const onChangeAge = (val) => {
    setAge((prev) => ({ ...prev, ...val }));
  };

  const onAfterChange = () => {
    dispatch(
      updateForm({
        keyName: name.en,
        name: name[lg],
        value: {
          man: [percentage.man + " %", age.man.join("-") + " age"],
          woman: [percentage.woman + " %", age.woman.join("-") + " age"],
        },
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

  useEffect(() => {
    if (wasCheckedBySubmitButton && isFinallyValid === false) {
      setInvalid("--invalid");
    } else setInvalid("");
  }, [wasCheckedBySubmitButton, isFinallyValid]);
  return (
    <div className="field field-range" id={id}>
      <div className={`field-title field-range__title`}>{title[lg]}</div>
      <SubGroupMan
        title={{
          am: ["Տղամարդիկ՝", "Տարիք՝", "տ․"],
          en: ["Men", "Age", "age"],
          ru: ["Мужчины", "Возраст", "л."],
        }}
        invalid={invalid}
        onChangePercentage={onChangePercentageMan}
        onChangeAge={onChangeAge}
        onAfterChange={onAfterChange}
        percentage={percentage.man}
        age={age.man}
        lg={lg}
        name={"man"}
      />
      <SubGroupWoman
        title={{
          am: ["Կանայք՝", "Տարիք՝", "տ․"],
          en: ["Women", "Age", "age"],
          ru: ["Женщины", "Возраст", "л."],
        }}
        invalid={invalid}
        onAfterChange={onAfterChange}
        onChangePercentage={onChangePercentageWoman}
        onChangeAge={onChangeAge}
        percentage={percentage.woman}
        age={age.woman}
        lg={lg}
        name={"woman"}
      />
    </div>
  );
};

export default TargetGroup;
