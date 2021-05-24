import React from "react";
import Languages from "../Languages";
import logo from "../../logo.svg";
import "./style.scss";

const Hero = (props) => {
  return (
    <div>
      <a href="https://zuckagency.com">
        <img src={logo} alt="logo" width="auto" />
      </a>
      <Languages />
    </div>
  );
};

export default Hero;
