import React from "react";
import spinner from "../../spinner.svg";
import "./style.scss";

const Loader = (props) => {
  return <img className="spinner" src={spinner} alt="spinner" />;
};

Loader.propTypes = {};

export default Loader;
