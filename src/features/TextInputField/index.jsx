import React from "react";

import InputText from "../../components/InputText";
import useTextFieldHandler from "../../Hooks/useTextFieldHandler";

const TextInputField = ({ title, lg, name, hintText, required, isValid }) => {
  const [focused, invalid, value, onChange, onFocus, onBlur, setInvalid] =
    useTextFieldHandler(name, required, isValid, lg);
  return (
    <InputText
      title={title}
      name={name}
      lg={lg}
      value={value}
      hintText={hintText}
      focused={focused}
      invalid={invalid}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      setInvalid={setInvalid}
    />
  );
};

export default TextInputField;
