import React from "react";
import logo from "../../logo.svg";
import "./style.scss";

const Hero = (props) => {
  return (
    <div>
      <a href="https://zuckagency.com">
        <img src={logo} alt="logo" width="auto" />
      </a>
      <h1>
        “We just want something creative” <br />
        is the worst brief ever.
      </h1>
    </div>
  );
};

export default Hero;
