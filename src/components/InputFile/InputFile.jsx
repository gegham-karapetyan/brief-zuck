import React from "react";
import PropTypes from "prop-types";
import attachIcon from "../../attach.svg";
import "./style.scss";

const names = {
  am: "Կցել",
  en: "Attach",
  ru: "Прикреплять",
};

const InputFile = ({ onChange, lg }) => {
  return (
    <label className="input-file" htmlFor="file">
      <img src={attachIcon} alt="attach-icon" />
      <span className="mark">{names[lg]}</span>
      <input
        id="file"
        onChange={onChange}
        onClick={(e) => {
          e.target.value = "";
        }}
        style={{
          opacity: 0,
          visibility: "hidden",
          position: "absolute",
          left: 0,
          width: 0,
        }}
        type="file"
        name="info"
      />
    </label>
  );
};

InputFile.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputFile;
