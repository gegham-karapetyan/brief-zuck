import React, { useState } from "react";
import Textarea from "../Textarea";
import InputRadio from "../InputRadio";
import "./style.scss";
import { useEffect } from "react";

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
    const newState = { ...initialCheckedData, ...{ [name]: true } };
    setChecked(newState);
    window.sendingData[props.name] = newState;
    if (name === "Other") {
      setAdditionalInput(true);
    } else setAdditionalInput(false);
  };
  useEffect(() => {
    window.sendingData[props.name] = {};
  }, []);
  return (
    <div className={"radioGroup"}>
      <div className="title">{props.title[props.lg]}</div>
      <div className={"container"}>
        {props.data.map((item) => (
          <InputRadio
            key={item.name}
            checked={checked[item.name]}
            hintText={item.hintText[props.lg]}
            onChange={onChange}
            name={item.name}
            lg={props.lg}
            title={item.title}
          />
        ))}
      </div>
      {additionalInput && (
        <Textarea
          name="Other description"
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
