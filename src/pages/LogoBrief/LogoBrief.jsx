import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../features/selectBriefReducer";
import TextareaAutosize from "react-autosize-textarea";
import "./style.scss";
import { createForm, resetForm } from "../../features/createSliceForm";
import { useRef } from "react";

const LogoBrief = (props) => {
  const dispatch = useDispatch();
  const node = useRef();
  console.log("node ref", node);
  const onClick = () => {
    console.log("node onclick", node);
    node.current.focus();
  };

  useEffect(() => {
    dispatch(selectBriefAC("Logo Brief"));
    dispatch(createForm());

    return () => dispatch(resetForm());
  }, [dispatch]);
  return (
    <div>
      <TT xx={node} />
      <button onClick={onClick}>press</button>
    </div>
  );
};

const TT = ({ xx }) => {
  console.log("ref", xx);
  return <TextareaAutosize ref={xx} />;
};

export default LogoBrief;
