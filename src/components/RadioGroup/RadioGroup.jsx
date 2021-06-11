import React, { useState } from "react";
import InpuTtext from "../InputText";
import InputRadio from "../InputRadio";
import "./style.scss";

function arrayToObj(arr, defaultValue = false) {
  let obj = {};
  arr.forEach((element) => {
    obj[element["name"]] = defaultValue;
  });
  return obj;
}

const RadioGroup = (props) => {
  const initialCheckedData = arrayToObj(props.data);
  const [additionalInput, setAdditionalInput] = useState(false);
  const [checked, setChecked] = useState(initialCheckedData);

  const onChange = (name) => {
    setChecked({ ...initialCheckedData, ...{ [name]: true } });
    if (name === "Other") {
      setAdditionalInput(true);
    } else setAdditionalInput(false);
  };
  return (
    <div className={"radioGroup"}>
      <div className="title">{props.title}</div>
      <div className={"container"}>
        {props.data.map((item) => (
          <InputRadio
            key={item.name}
            checked={checked[item.name]}
            hintText={item.hintText[props.lg]}
            onChange={onChange}
            name={item.name}
          />
        ))}
      </div>
      {additionalInput && (
        <InpuTtext
          name="Other description"
          lg="am"
          required={false}
          hint={false}
        />
      )}
    </div>
  );
};
export default RadioGroup;
