import React from "react";
import "./style.scss";

const RequiredInfo = (props) => {
  return (
    <div className="requiredInfo">
      <p>* - required fields</p>
      <p>Աստղանիշով նշված դաշտերը չլրացնելու դեպքում հայտը չի ուղարկվի</p>
    </div>
  );
};

export default RequiredInfo;
