import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../redux/selectBriefReducer";
import Test from "../../components/test";
import "./style.scss";

const LogoBrief = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectBriefAC("Logo Brief"));
  });
  return (
    <div>
      <Test />
    </div>
  );
};

export default LogoBrief;
