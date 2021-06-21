import React, { useState } from "react";
import PropTypes from "prop-types";

import "./style.scss";

const InputText = ({
  name,
  lg,
  placeholder,
  title,
  required,
  isValid,
  updateForm,
}) => {
  const [focused, setFocused] = useState("");
  const [invalid, setInvalid] = useState("");
  const [value, setValue] = useState("");
  const focusHandler = () => {
    setFocused("focused");
  };

  const onBlur = (e) => {
    let value = e.target.value.trim();
    if (required) {
      updateForm({
        value,
        isValid: isValid(value),
        keyName: name.en,
        name: name[lg],
      });
      if (!isValid(value)) setInvalid("invalid");
    } else {
      updateForm({ value, isValid: true, keyName: name.en, name: name[lg] });
    }

    if (!value) {
      setFocused("");
    }
  };

  const onChange = (e) => {
    let value = e.target.value;
    setValue(value);

    if (required) {
      if (!isValid(value)) {
        setInvalid("invalid");
      } else {
        setInvalid("");
      }
    }
  };

  return (
    <div>
      <label className={`textInput ${lg || "en"}`}>
        <div className={`textInputLabel ${focused}`}>{title[lg]}</div>
        <input
          value={value}
          onChange={onChange}
          className={invalid}
          placeholder={placeholder}
          onFocus={focusHandler}
          onBlur={onBlur}
          type="text"
          name={name["en"]}
        />
      </label>
    </div>
  );
};

InputText.propTypes = {
  title: PropTypes.object.isRequired,
  name: PropTypes.object,
  lg: PropTypes.string,
  required: PropTypes.bool,
  hint: PropTypes.bool,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
};

export default InputText;
