import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../features/selectBriefReducer";

// import DayPickerInput from "../../components/DayPickerInput";
// import "react-day-picker/lib/style.css";
// import "./style.scss";

const StrategyBrief = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectBriefAC("Strategy Brief"));
  });
  return (
    <div>
      {/* <DayPickerInput
        dayPickerProps={{
          month: new Date(2018, 10),
          showWeekNumbers: true,
          todayButton: "Today",
        }}
      /> */}
    </div>
  );
};

export default StrategyBrief;
