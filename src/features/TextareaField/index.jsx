import React from "react";

import useTextFieldHandler from "../../Hooks/useTextFieldHandler";

import TextareaBlock from "../../components/TextareaBlock/TextareaBlock";

const TextareaField = ({ title, lg, name, hintText, required, isValid }) => {
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
    <TextareaBlock
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
export default TextareaField;
