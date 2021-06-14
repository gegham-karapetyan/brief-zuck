import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../features/selectBriefReducer";
import FilesBox from "../../components/FilesBox";
import "./style.scss";

const data = [
  { val: "as", pos: 4 },
  { val: "sd", pos: 2 },
  { val: "df", pos: 1 },
  { val: "rt", pos: 3 },
  { val: "ty", pos: 5 },
];

const LogoBrief = (props) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   window.__file = [];
  //   dispatch(selectBriefAC("Logo Brief"));
  // });

  // const onChange = (e) => {
  //   window.__file.push(e.target.files[0]);
  //   console.log(window.__file);
  // };
  return (
    <div>
      {data
        .map((item) => <div key={item.pos}>{item.val}</div>)
        .sort((a, b) => {
          console.log("elem : ->", a);
          return a.key - b.key;
        })}
    </div>
  );
};

export default LogoBrief;
