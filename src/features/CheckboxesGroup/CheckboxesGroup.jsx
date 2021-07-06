import React, { useState, useRef } from "react";
import TextareaBlock from "../../components/TextareaBlock";
import InputCheckbox from "../../components/InputCheckbox";
import { useDispatch, useSelector } from "react-redux";
import {
  setOtherText,
  setFieldName,
  updateThisField,
} from "../createSliceForm";
import PropTypes from "prop-types";
import isValid from "../../utils/isEmpty";
import "./style.scss";
import { useEffect } from "react";

function arrayToObj(arr, defaultValue = false) {
  let obj = {};
  arr.forEach((element) => {
    obj[element["name"]] = defaultValue;
  });
  return obj;
}

const CheckboxesGroup = ({
  title,
  lg,
  data,
  name,
  require,
  isValidCheckboxes,
}) => {
  const initialCheckedData = arrayToObj(data);

  const [additionalInput, setAdditionalInput] = useState(false);
  const [checked, setChecked] = useState(initialCheckedData);
  const [focused, setFocused] = useState("");
  const [invalid, setInvalid] = useState("");
  const [invalidCheckbox, setInvalidCheckbox] = useState("");
  const [additionalInputValue, setAdditionalInputValue] = useState("");

  const wasCheckedBySubmitButton = useSelector(
    (state) => state.form[name.en].wasCheckedBySubmitButton
  );
  const isFinallyValid = useSelector((state) => state.form[name.en].isValid);

  const dispatch = useDispatch();
  const additionalTextField = useRef(null);

  const onChange = (e) => {
    const value = e.target.value;

    setAdditionalInputValue(e.target.value);
    if (!isValid(value)) setInvalid("invalid");
    else setInvalid("");
  };
  const onBlur = (e) => {
    const value = e.target.value;
    dispatch(
      setOtherText({
        value: value,
        keyName: name["en"],
        required: true,
      })
    );
    if (!value) {
      setFocused("");
      setInvalid("invalid");
    }
  };

  const onFocus = () => {
    setFocused("focused");
  };

  const addNewInput = (toggle) => {
    setAdditionalInput(toggle);
    setAdditionalInputValue("");
    dispatch(
      setOtherText({
        value: "",
        keyName: name["en"],
        required: true,
      })
    );
  };

  const onChangeCheckbox = (e) => {
    const elemName = e.target.name;
    if (elemName === "Other") {
      addNewInput(!additionalInput);
    }

    setChecked((prev) => {
      const newState = { ...prev, ...{ [elemName]: !prev[elemName] } };
      const sendingValue = { ...newState };
      let validOtherValue = true;
      if (newState.Other) {
        sendingValue.Other = additionalInputValue;
        validOtherValue = isValid(additionalInputValue);
      }
      let valid;

      if (require) valid = isValidCheckboxes(newState) && validOtherValue;
      else valid = true;

      dispatch(
        updateThisField({
          value: sendingValue,
          isValid: valid,
          keyName: name.en,
        })
      );

      return newState;
    });
  };
  useEffect(() => {
    dispatch(
      setFieldName({
        keyName: name.en,
        name: name[lg],
      })
    );
  }, [name, lg, dispatch]);

  useEffect(() => {
    if (additionalInput) additionalTextField.current.focus();
  }, [additionalInput, additionalTextField]);
  useEffect(() => {
    if (wasCheckedBySubmitButton === true && isFinallyValid === false) {
      setInvalidCheckbox("invalid-checkbox");
    } else setInvalidCheckbox("");
  }, [wasCheckedBySubmitButton, isFinallyValid]);
  return (
    <div className={"checkboxesGroup"}>
      <div className={`title ${lg}`}>{title[lg]}</div>
      <div className={"container"}>
        {data.map((item) => (
          <InputCheckbox
            invalid={invalidCheckbox}
            onChange={onChangeCheckbox}
            checked={checked[item.name]}
            key={item.name}
            addNewInput={addNewInput}
            name={item.name}
            hintText={item.hintText[lg]}
          />
        ))}
      </div>

      {additionalInput && (
        <TextareaBlock
          name={{
            am: "Other description",
            en: "Other description",
            ru: "",
          }}
          title={{
            am: "Other description",
            en: "Other description",
            ru: "",
          }}
          lg={lg}
          internalRef={additionalTextField}
          value={additionalInputValue}
          focused={focused}
          invalid={invalid}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={onChange}
          setInvalid={setInvalid}
        />
      )}
    </div>
  );
};

CheckboxesGroup.propTypes = {
  data: PropTypes.array,
  title: PropTypes.object.isRequired,
  lg: PropTypes.string,
};

export default CheckboxesGroup;
