import React from "react";
import PropTypes from "prop-types";
import Hint from "../Hint";

import "./style.scss";

const InputText = ({
  title,
  lg,
  name,
  hintText,
  focused,
  onFocus,
  onBlur,
  invalid,
  value,
  onChange,
  internalRef,
  placeholder,
}) => {
  return (
    <div>
      <label className={`textInput ${lg || "en"}`}>
        <div className={`textInputLabel ${focused}`}>
          {title[lg]}
          {hintText && <Hint hintText={hintText[lg]} />}
        </div>
        <input
          ref={internalRef}
          value={value}
          onChange={onChange}
          className={invalid}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          type="text"
          name={name["en"]}
        />
      </label>
    </div>
  );
};

InputText.propTypes = {
  title: PropTypes.object,
  name: PropTypes.object.isRequired,
  lg: PropTypes.string.isRequired,
  focused: PropTypes.oneOf(["", "focused"]),
  required: PropTypes.bool,
  hintText: PropTypes.object,
  hint: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputText;
