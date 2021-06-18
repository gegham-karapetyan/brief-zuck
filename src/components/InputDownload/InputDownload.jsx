import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const title = {
  am: "Ներբեռնել բրիֆը",
  en: "",
  ru: "",
};

const InputDownload = ({ lg }) => {
  return <button className="link-btn">{title[lg]}</button>;
};

InputDownload.propTypes = {};

export default InputDownload;
