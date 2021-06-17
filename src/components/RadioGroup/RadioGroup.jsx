import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateForm, setOtherText } from "../../features/createSliceForm";
import Textarea from "../Textarea";
import InputRadio from "../InputRadio";
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
          name,
          isValid: !!Object.keys(newState).length,
        })
      );
    else dispatch(updateForm({ value: newState, name, isValid: true }));

    if (itemName === "Other") {
      setAdditionalInput(true);
    } else setAdditionalInput(false);
  };
  const onChangeTextarea = (val) => {
    dispatch(setOtherText({ value: val, name }));
  };
  return (
    <div className={"radioGroup"}>
      <div className="title">{title[lg]}</div>
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
        <Textarea
          name="Other description"
          otherDescription={onChangeTextarea}
          title={{
            am: "Other description",
            en: "Other description",
            ru: "",
          }}
          lg="am"
          required={false}
          hint={false}
        />
      )}
    </div>
  );
};
export default RadioGroup;
