import React from "react";
import PropTypes from "prop-types";
import attachIcon from "../../attach.svg";
import "./style.scss";

const InputFile = ({ onChange }) => {
  return (
    <label className="input-file">
      <img src={attachIcon} alt="attach-icon" />
      <span className="mark">Attach</span>
      <input
        onChange={onChange}
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
