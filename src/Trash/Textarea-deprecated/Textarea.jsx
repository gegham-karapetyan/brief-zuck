import React, { useEffect, useState } from "react";
import TextareaAutosize from "react-autosize-textarea";

import PropTypes from "prop-types";
import Hint from "../../components/Hint";
//import { useDispatch } from "react-redux";
//import { updateForm, setFieldName } from "../../features/createSliceForm";

import "./style.scss";
import { useSelector } from "react-redux";

const Textarea = ({
  title,
  lg,
  name,
  hintText,
  required,
  isValid,
  updateForm,
  isFocused,
  refrence,
}) => {
  const [focused, setFocused] = useState(isFocused || "");
  const [value, setValue] = useState("");
  const [invalid, setInvalid] = useState("");

  const wasCheckedBySubmitButton = useSelector(
    (state) => state.form[name.en].wasCheckedBySubmitButton
  );
  const isFinallyValid = useSelector((state) => state.form[name.en].isValid);

  console.log("wasCheckedBySubmitButton->", wasCheckedBySubmitButton);
  const onChange = (e) => {
    const value = e.target.value;

    setValue(e.target.value);

    if (required && !isValid(value)) setInvalid("invalid");
    else setInvalid("");
  };
  const onFocus = () => {
    setFocused("focused");
  };
  const onBlur = (e) => {
    const value = e.target.value.trim();
    if (required) {
      updateForm({
        value,
        isValid: isValid(value),
        keyName: name.en,
      });
    } else {
      updateForm({
        value,
        isValid: true,
        keyName: name.en,
      });
    }

    if (!value) {
      setFocused("");
      setValue("");
      if (required) setInvalid("invalid");
    }
  };

  useEffect(() => {
    if (wasCheckedBySubmitButton === true && isFinallyValid === false) {
      setInvalid("invalid");
    }
  }, [wasCheckedBySubmitButton, isFinallyValid]);
  return (
    <div>
      <label className={`textarea ${lg}`}>
        <div className={`textareaLabel ${focused}`}>
          {title[lg]}
          {hintText && <Hint hintText={hintText[lg]} />}
        </div>
        <TextareaAutosize
          ref={refrence}
          className={invalid}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          name={name["en"]}
        />
      </label>
    </div>
  );
};

Textarea.propTypes = {
  title: PropTypes.object,
  name: PropTypes.object.isRequired,
  lg: PropTypes.string.isRequired,
  required: PropTypes.bool,
  hint: PropTypes.bool,
  refrence: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default Textarea;
