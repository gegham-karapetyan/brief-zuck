import React, { useState } from "react";
import SubGroupMan from "./SubGroupMan";
import SubGroupWoman from "./SubGroupWoman";
import "./style.scss";

const TargetGroup = (props) => {
  const [currentPoint, setCurrentPoint] = useState({ man: 50, woman: 50 });
  // const [currentPointWoman, setCurrentPointWoman] = useState(50);
  // const onStartpointMan = (num) => {
  //   console.log("curentPointMan : ", num);
  //   setCurrentPointWoman(num);
  // };
  // const onStartPointWoman = (num) => {
  //   setCurrentPointMan(num);
  // };

  const onChangePercentageMan = (num) => {
    setCurrentPoint({ man: num, woman: 100 - num });
  };
  const onChangePercentageWoman = (num) => {
    setCurrentPoint({ man: 100 - num, woman: num });
  };
  return (
    <div className="targetGroup">
      <div className="label">Թիրախային խումբ *</div>
      <SubGroupMan
        onChange={onChangePercentageMan}
        currentPoint={currentPoint.man}
      />
      <SubGroupWoman
        onChange={onChangePercentageWoman}
        currentPoint={currentPoint.woman}
      />
    </div>
  );
};

export default TargetGroup;
