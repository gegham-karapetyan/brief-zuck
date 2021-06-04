import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../redux/selectBriefReducer";
import Calendar from "react-calendar";
import "./style.scss";
//import "react-calendar/dist/Calendar.css";

const CommercialVideoBrief = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectBriefAC("Commercial Video Brief"));
  });
  return <div>{/* <Calendar /> */}</div>;
};

export default CommercialVideoBrief;
