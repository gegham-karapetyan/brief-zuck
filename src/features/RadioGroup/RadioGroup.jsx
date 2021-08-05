import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateForm,
  setOtherText,
  setFieldName,
} from "../reduxSlices/createSliceForm";
import TextareaBlock from "../../components/TextareaBlock";
import isValid from "../../utils/isEmpty";
import InputRadio from "../../components/InputRadio";
import createIdByName from "../../utils/createIdByName";
import "./style.scss";

function arrayToObj(arr, defaultValue = false) {
  let obj = {};
  arr.forEach((element) => {
    obj[element["name"]] = defaultValue;
  });
  return obj;
}

function isValidCheckboxes(obj) {
  return Object.values(obj).some((i) => i);
}

const RadioGroup = ({ data, name, title, lg, require, disabled = false }) => {
  const initialCheckedData = arrayToObj(data);

  const [additionalInput, setAdditionalInput] = useState(false);
  const [checked, setChecked] = useState(initialCheckedData);
  const [focused, setFocused] = useState("");
  const [invalid, setInvalid] = useState("");
  const [additionalInputValue, setAdditionalInputValue] = useState("");
  const [invalidCheckbox, setInvalidCheckbox] = useState("");

  const dispatch = useDispatch();
  const additionalTextField = useRef(null);
  const wasCheckedBySubmitButton = useSelector(
    (state) => state.form[name.en].wasCheckedBySubmitButton
  );
  const isFinallyValid = useSelector((state) => state.form[name.en].isValid);
  const id = createIdByName(name.en);
  const onChangeRadiobox = (e) => {
    if (disabled) return;
    const elemName = e.target.name;
    if (elemName === "Other") {
      addNewInput(true);
    } else addNewInput(false);
    const newState = { ...initialCheckedData, ...{ [elemName]: true } };

    const sendingValue = { ...newState };
    let validOtherValue = true;
    if (newState.Other) {
      sendingValue.Other = additionalInputValue;
      validOtherValue = isValid(additionalInputValue);
    }
    let valid;

    if (require) valid = isValidCheckboxes(newState) && validOtherValue;
    else valid = true;
    setChecked(newState);

    dispatch(
      updateForm({
        value: newState,
        keyName: name.en,
        isValid: valid,
      })
    );
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

  const onChange = (e) => {
    const value = e.target.value;
    setAdditionalInputValue(e.target.value);
    if (!isValid(value)) setInvalid("--invalid");
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
      setInvalid("--invalid");
    }
  };
  const onFocus = () => {
    setFocused("--focused");
  };

  useEffect(() => {
    dispatch(
      setFieldName({
        keyName: name.en,
        name: name[lg],
        id,
      })
    );
  }, [name, lg, id, dispatch]);
  useEffect(() => {
    if (additionalInput) additionalTextField.current.focus();
  }, [additionalInput, additionalTextField]);
  useEffect(() => {
    if (wasCheckedBySubmitButton && isFinallyValid === false) {
      setInvalidCheckbox("--invalid");
    } else setInvalidCheckbox("");
  }, [wasCheckedBySubmitButton, isFinallyValid]);
  return (
    <div className={"field field-select"}>
      <div className={"field-title field-select__title"}>{title[lg]}</div>
      <div className={"container"}>
        {data.map((item) => (
          <InputRadio
            invalid={invalidCheckbox}
            key={item.name}
            checked={checked[item.name]}
            hintText={item.hintText[lg]}
            onChange={onChangeRadiobox}
            name={item.name}
            lg={lg}
            innerText={item.innerText}
          />
        ))}
      </div>
      {additionalInput && (
        <TextareaBlock
          name={{
            am: "Այլ նկարագրություն",
            en: "Other description",
            ru: "Другое описание",
          }}
          title={{
            am: "Այլ նկարագրություն",
            en: "Other description",
            ru: "Другое описание",
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
export default RadioGroup;
