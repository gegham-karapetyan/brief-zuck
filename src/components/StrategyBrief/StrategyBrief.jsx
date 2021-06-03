import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../redux/selectBriefReducer";
//import { DataPicker } from "react-trip-date";
import "./style.scss";

const StrategyBrief = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectBriefAC("Strategy Brief"));
  });
  return <div>{/* <DataPicker /> */}</div>;
};

export default StrategyBrief;
