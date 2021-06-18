import React from "react";
import "./style.scss";

const Paragraph = ({ data, lg }) => {
  return <div>{data[lg]}</div>;
};

export default Paragraph;
