import React, { useState } from "react";
import PropTypes from "prop-types";
// import Hint from "../Hint";
import "./style.scss";

const InputText = ({ name, lg, placeholder, onFocus }) => {
  const [focused, setFocused] = useState("");
  const focusHandler = () => {
    if (onFocus) onFocus(true);
    setFocused("focused");
  };
  const onBlur = (e) => {
    if (!e.target.value.trim()) setFocused("");
  };
  return (
    <div>
      <label className={`textInput ${lg || "en"}`}>
        <div className={`textInputLabel ${focused}`}>
          {name[lg]}
          {/* {hint && <Hint text="some text" />} */}
        </div>
        <input
          placeholder={placeholder}
          onFocus={focusHandler}
          onBlur={onBlur}
          type="text"
          name={name.en}
        />
      </label>
    </div>
  );
};

InputText.propTypes = {
  name: PropTypes.object.isRequired,
  lg: PropTypes.string,
  required: PropTypes.bool,
  hint: PropTypes.bool,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
};

export default InputText;
