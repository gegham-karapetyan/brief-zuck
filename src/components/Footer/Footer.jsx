import React from "react";
import Languages from "../Languages";
import RequiredInfo from "../RequiredInfo";
import "./style.scss";

const Footer = (props) => {
  return (
    <div>
      <Languages />
      <RequiredInfo />
    </div>
  );
};

export default Footer;
