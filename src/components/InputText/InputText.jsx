import React from "react";
import PropTypes from "prop-types";
import Hint from "../Hint";

const InputText = ({
  title,
  id,
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
    <div className={"field field-text"} id={id}>
      <label>
        <span className={`field-title field-text__title ${focused}`}>
          {title[lg]}
          {hintText && <Hint hintText={hintText[lg]} />}
        </span>
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
  id: PropTypes.string.isRequired,
  name: PropTypes.object.isRequired,
  lg: PropTypes.string.isRequired,
  focused: PropTypes.oneOf(["", "--focused"]),
  required: PropTypes.bool,
  hintText: PropTypes.object,
  hint: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputText;
