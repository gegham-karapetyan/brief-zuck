import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../features/selectBriefReducer";

import TextareaBlock from "../../components/TextareaBlock";

import "./style.scss";
import {
  createForm,
  resetForm,
} from "../../features/reduxSlices/createSliceForm";
import { useRef } from "react";

const LogoBrief = (props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState("false");
  const node = useRef();

  const onClick = () => {
    console.log("node onclick", node);
    node.current.focus();
  };

  useEffect(() => {
    dispatch(selectBriefAC("Logo Brief"));
    dispatch(createForm());
    setShow(true);
    return () => dispatch(resetForm());
  }, [dispatch]);
  return <>{show && <></>}</>;
};

export default LogoBrief;
