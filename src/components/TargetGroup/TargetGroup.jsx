import React, { useState } from "react";
import SubGroupMan from "./SubGroupMan";
import SubGroupWoman from "./SubGroupWoman";
import "./style.scss";

const TargetGroup = ({ title, lg }) => {
  const [currentPoint, setCurrentPoint] = useState({ man: 50, woman: 50 });

  const onChangePercentageMan = (num) => {
    setCurrentPoint({ man: num, woman: 100 - num });
  };
  const onChangePercentageWoman = (num) => {
    setCurrentPoint({ man: 100 - num, woman: num });
  };
  return (
    <div className="targetGroup">
      <div className="label">{title[lg]}</div>
      <SubGroupMan
        title={{
          am: ["Տղամարդիկ՝", "Տարիք՝", "տ․"],
          en: ["Men", "Age", "age"],
          ru: ["", ""],
        }}
        onChange={onChangePercentageMan}
        currentPoint={currentPoint.man}
        lg={lg}
      />
      <SubGroupWoman
        title={{
          am: ["Կանայք՝", "Տարիք՝", "տ․"],
          en: ["Women", "Age", "age"],
          ru: ["", ""],
        }}
        onChange={onChangePercentageWoman}
        currentPoint={currentPoint.woman}
        lg={lg}
      />
    </div>
  );
};

export default TargetGroup;
