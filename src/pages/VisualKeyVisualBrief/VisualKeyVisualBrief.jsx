import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../features/selectBriefReducer";
import "./style.scss";

const VisualKeyVisualBrief = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectBriefAC("Visual / Key Visual Brief"));
  });
  return <div>VisualKeyVisualBrief works!</div>;
};

export default VisualKeyVisualBrief;
