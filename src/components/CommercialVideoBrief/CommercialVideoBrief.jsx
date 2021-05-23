import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../redux/selectBriefReducer";
import "./style.scss";

const CommercialVideoBrief = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectBriefAC("Commercial Video Brief"));
  });
  return <div>CommercialVideoBrief works!</div>;
};

export default CommercialVideoBrief;
