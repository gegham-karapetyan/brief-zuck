import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const title = {
  am: "Ներբեռնել բրիֆը",
  en: "Download",
  ru: "Cкачать",
};

const InputDownload = ({ lg, style }) => {
  return (
    <button style={style} className={`link-btn ${lg}`}>
      {title[lg]}
    </button>
  );
};

InputDownload.propTypes = {};

export default InputDownload;
