import React, { useState } from "react";
import Textarea from "../Textarea";
import InputCheckbox from "../InputCheckbox";
import { useDispatch } from "react-redux";
import { updateForm, setOtherText } from "../../features/createSliceForm";
import PropTypes from "prop-types";
import "./style.scss";

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

  const dispatch = useDispatch();

  const addNewInput = (checked) => {
    setAdditionalInput(checked);
  };
  const onChangeTextarea = (val) => {
    dispatch(setOtherText({ value: val, name }));
  };
  const onChangeCeckbox = (e) => {
    const elemName = e.target.name;

    setChecked((prev) => {
      const newState = { ...prev, ...{ [elemName]: !prev[elemName] } };
      if (require) {
        const isValid = Object.values(newState).some((i) => i);
        dispatch(updateForm({ value: newState, isValid: isValid, name }));
      } else {
        dispatch(updateForm({ value: newState, isValid: true, name }));
      }

      return newState;
    });

    if (elemName === "Other") {
      addNewInput(!additionalInput);
    }
  };

  return (
    <div className={"checkboxesGroup"}>
      <div className="title">{title[lg]}</div>
      <div className={"container"}>
        {data.map((item) => (
          <InputCheckbox
            onChange={onChangeCeckbox}
            // boxName={name}
            checked={checked[item.name]}
            key={item.name}
            addNewInput={addNewInput}
            name={item.name}
            hintText={item.hintText[lg]}
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
          otherDescription={onChangeTextarea}
          lg="am"
          required={false}
          hint={false}
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
