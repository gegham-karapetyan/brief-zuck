import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Input from "./Input";
import { selectBriefAC } from "../../features/selectBriefReducer";
import { resetForm } from "../../features/createSliceForm";
//import "./style.scss";

const SocialMediaActivationBrief = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectBriefAC("Social Media Activation Brief"));
    dispatch(resetForm());
  });
  return (
    <>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </>
  );
};

export default SocialMediaActivationBrief;
