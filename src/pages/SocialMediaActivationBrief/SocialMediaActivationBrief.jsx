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

    return () => dispatch(resetForm());
  });
  return (
    <>
      <Input name="a1" />
      <Input name="a2" />
      <Input name="a3" />
      <Input name="a4" />
      <Input name="a5" />
      <Input name="a6" />
      <Input name="a7" />
    </>
  );
};

export default SocialMediaActivationBrief;
