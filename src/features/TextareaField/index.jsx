import React from "react";

import useTextFieldHandler from "../../Hooks/useTextFieldHandler";

import TextareaBlock from "../../components/TextareaBlock/TextareaBlock";

const TextareaField = ({ title, lg, name, hintText, required, isValid }) => {
  const [focused, invalid, value, onChange, onFocus, onBlur] =
    useTextFieldHandler(name, required, isValid, lg);

  return (
    <TextareaBlock
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
    />
  );
};
export default TextareaField;
