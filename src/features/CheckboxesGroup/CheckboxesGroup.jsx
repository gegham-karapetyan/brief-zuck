import React, { useState, useRef, useCallback } from "react";
import TextareaBlock from "../../components/TextareaBlock";
import InputCheckbox from "../../components/InputCheckbox";
import { useDispatch } from "react-redux";
import {
  updateForm,
  setOtherText,
  setFieldName,
  updateMultiSelectField,
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

const CheckboxesGroup = ({ title, lg, data, name, require }) => {
  const initialCheckedData = arrayToObj(data);

  const [additionalInput, setAdditionalInput] = useState(false);
  const [checked, setChecked] = useState(initialCheckedData);
  const [focused, setFocused] = useState("");
  const [invalid, setInvalid] = useState("");
  const [value, setValue] = useState("");

  const onChange = (e) => {
    const value = e.target.value;

    setValue(e.target.value);
    if (!isValid(value)) setInvalid("invalid");
    else setInvalid("");
  };
  const onBlur = (e) => {
    const value = e.target.value;
    dispatch(
      setOtherText({
        value: value,
        keyName: name["en"],
        isValid: isValid(value),
      })
    );
    if (!value) {
      setFocused("");
    }
  };

  const onFocus = () => {
    setFocused("focused");
  };
  const dispatch = useDispatch();

  const additionalTextField = useRef(null);

  // const additionalTextField = useCallback((node) => {
  //   if (node) node.focus();
  // }, []);

  const addNewInput = (toogle) => {
    setAdditionalInput(toogle);

    setValue("");
  };

  const onChangeCeckbox = (e) => {
    const elemName = e.target.name;

    setChecked((prev) => {
      const newState = { ...prev, ...{ [elemName]: !prev[elemName] } };
      if (require) {
        const isValid =
          Object.values(newState).some((i) => i) && newState.Other !== true;
        dispatch(
          updateMultiSelectField({
            value: newState,
            isValid: isValid,
            keyName: name.en,
            name: name[lg],
          })
        );
      } else {
        dispatch(
          updateMultiSelectField({
            value: newState,
            isValid: true,
            keyName: name.en,
            name: name[lg],
          })
        );
      }

      return newState;
    });

    if (elemName === "Other") {
      addNewInput(!additionalInput);
    }
  };
  useEffect(() => {
    dispatch(
      setFieldName({
        keyName: name.en,
        name: name[lg],
      })
    );
  }, [name, lg, dispatch, additionalTextField]);

  useEffect(() => {
    if (additionalInput) additionalTextField.current.focus();
  }, [additionalInput, additionalTextField]);

  return (
    <div className={"checkboxesGroup"}>
      <div className={`title ${lg}`}>{title[lg]}</div>
      <div className={"container"}>
        {data.map((item) => (
          <InputCheckbox
            onChange={onChangeCeckbox}
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
          value={value}
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
