import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../redux/selectBriefReducer";
import "./style.scss";

const LogoBrief = (props) => {
  const dispatch = useDispatch();
  console.log("logo-brief ------");
  useEffect(() => {
    dispatch(selectBriefAC("Logo Brief"));
  });
  return <div>LogoBrief works!</div>;
};

export default LogoBrief;
