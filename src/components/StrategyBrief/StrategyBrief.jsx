import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../redux/selectBriefReducer";
import "./style.scss";

const StrategyBrief = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectBriefAC("Strategy Brief"));
  });
  return <div>StrategyBrief works!</div>;
};

export default StrategyBrief;
