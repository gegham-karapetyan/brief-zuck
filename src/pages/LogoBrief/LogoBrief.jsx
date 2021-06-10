import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../features/selectBriefReducer";
import FilesBox from "../../components/FilesBox";
import "./style.scss";

const LogoBrief = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.__file = [];
    dispatch(selectBriefAC("Logo Brief"));
  });

  const onChange = (e) => {
    window.__file.push(e.target.files[0]);
    console.log(window.__file);
  };
  return (
    <div>
      <FilesBox name="Հավելյալ տեղեկատվություն" onChange={onChange} />
    </div>
  );
};

export default LogoBrief;
