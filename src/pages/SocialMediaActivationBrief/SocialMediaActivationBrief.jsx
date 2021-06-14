import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "../../components/DatePicker";
import { selectBriefAC } from "../../features/selectBriefReducer";
//import "./style.scss";

const SocialMediaActivationBrief = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectBriefAC("Social Media Activation Brief"));
  });
  return <div>hello</div>;
};

export default SocialMediaActivationBrief;
