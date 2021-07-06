import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateForm, setOtherText, setFieldName } from "../createSliceForm";
import TextareaBlock from "../../components/TextareaBlock";
import isValid from "../../utils/isEmpty";
import InputRadio from "../../components/InputRadio";
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

const RadioGroup = ({ data, name, title, lg, require }) => {
  const initialCheckedData = arrayToObj(data);

  const [additionalInput, setAdditionalInput] = useState(false);
  const [checked, setChecked] = useState(initialCheckedData);
  const [focused, setFocused] = useState("");
  const [invalid, setInvalid] = useState("");
  const [additionalInputValue, setAdditionalInputValue] = useState("");

  const dispatch = useDispatch();
  const additionalTextField = useRef(null);

  const onChangeRadiobox = (e) => {
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
  return (
    <div className={"radioGroup"}>
      <div className={`title ${lg}`}>{title[lg]}</div>
      <div className={"container"}>
        {data.map((item) => (
          <InputRadio
            key={item.name}
            checked={checked[item.name]}
            hintText={item.hintText[lg]}
            onChange={onChangeRadiobox}
            name={item.name}
            lg={lg}
            title={item.title}
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
export default RadioGroup;
