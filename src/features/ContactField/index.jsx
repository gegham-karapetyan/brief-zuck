import React from "react";

import InputText from "../../components/InputText";
import useTextFieldHandler from "../../Hooks/useTextFieldHandler";

const TextInputField = ({ title, lg, name, hintText, required, isValid }) => {
  const {
    focused,
    invalid,
    id,
    value,
    componentRef,
    onChange,
    onFocus,
    onBlur,
  } = useTextFieldHandler(name, required, isValid, lg);
  return (
    <InputText
      internalRef={componentRef}
      title={title}
      id={id}
      name={name}
      lg={lg}
      value={value}
      hintText={hintText}
      focused={focused}
      invalid={invalid}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
    />
  );
};

export default TextInputField;
