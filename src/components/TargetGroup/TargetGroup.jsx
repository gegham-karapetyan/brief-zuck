import React, { useState, useEffect } from "react";
import SubGroupMan from "./SubGroupMan";
import SubGroupWoman from "./SubGroupWoman";
import { useDispatch } from "react-redux";
import { updateForm, setFieldName } from "../../features/createSliceForm";
import "./style.scss";

const TargetGroup = ({ title, lg, name }) => {
  const dispatch = useDispatch();

  const [percentage, setPercentage] = useState({ man: 50, woman: 50 });
  const [age, setAge] = useState({ man: [24, 44], woman: [24, 44] });

  const onChangePercentageMan = (num) => {
    const newData = { man: num, woman: 100 - num };
    setPercentage(newData);

    // onAfterChange
  };
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
      })
    );
  }, [name, lg, dispatch]);
  return (
    <div className="targetGroup">
      <div className="label">{title[lg]}</div>
      <SubGroupMan
        title={{
          am: ["Տղամարդիկ՝", "Տարիք՝", "տ․"],
          en: ["Men", "Age", "age"],
          ru: ["", ""],
        }}
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
          ru: ["", ""],
        }}
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
