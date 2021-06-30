import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateForm, setOtherText, setFieldName } from "../createSliceForm";
import TextareaBlock from "../../components/TextareaBlock";
import InputRadio from "../../components/InputRadio";
import "./style.scss";

function arrayToObj(arr, defaultValue = false) {
  let obj = {};
  arr.forEach((element) => {
    obj[element["name"]] = defaultValue;
  });
  return obj;
}

const RadioGroup = ({ data, name, title, lg, require }) => {
  const initialCheckedData = arrayToObj(data);
  const [additionalInput, setAdditionalInput] = useState(false);
  const [checked, setChecked] = useState(initialCheckedData);
  const dispatch = useDispatch();
  const onChange = (itemName) => {
    const newState = { ...initialCheckedData, ...{ [itemName]: true } };
    setChecked(newState);
    if (require)
      dispatch(
        updateForm({
          value: newState,
          keyName: name.en,
          isValid: !!Object.keys(newState).length,
        })
      );
    else
      dispatch(
        updateForm({
          value: newState,
          keyName: name.en,
          isValid: true,
        })
      );

    if (itemName === "Other") {
      setAdditionalInput(true);
    } else setAdditionalInput(false);
  };
  const updateAdditionalDescription = (params) => {
    dispatch(setOtherText({ ...params, keyName: name["en"] }));
  };
  useEffect(() => {
    dispatch(
      setFieldName({
        keyName: name.en,
        name: name[lg],
      })
    );
  }, [name, lg, dispatch]);
  return (
    <div className={"radioGroup"}>
      <div className={`title ${lg}`}>{title[lg]}</div>
      <div className={"container"}>
        {data.map((item) => (
          <InputRadio
            key={item.name}
            checked={checked[item.name]}
            hintText={item.hintText[lg]}
            onChange={onChange}
            name={item.name}
            lg={lg}
            title={item.title}
          />
        ))}
      </div>
      {additionalInput && (
        <TextareaBlock
          name={{
            en: "Other description",
            am: "Other description",
            ru: "Other description",
          }}
          updateForm={updateAdditionalDescription}
          title={{
            am: "Other description",
            en: "Other description",
            ru: "",
          }}
          lg="am"
          isFocused={"focused"}
          required={false}
          hint={false}
        />
      )}
    </div>
  );
};
export default RadioGroup;
