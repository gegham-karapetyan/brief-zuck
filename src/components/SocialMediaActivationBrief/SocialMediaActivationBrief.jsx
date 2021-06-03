import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import DataPicker from "../DataPicker";
import { selectBriefAC } from "../../redux/selectBriefReducer";
//import "./style.scss";

const SocialMediaActivationBrief = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectBriefAC("Social Media Activation Brief"));
  });
  return (
    <div>
      <DataPicker />
    </div>
  );
};

export default SocialMediaActivationBrief;
