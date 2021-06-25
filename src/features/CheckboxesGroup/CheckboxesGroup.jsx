import React, { useState } from "react";
import Textarea from "../../components/Textarea";
import InputCheckbox from "../../components/InputCheckbox";
import { useDispatch } from "react-redux";
import { updateForm, setOtherText, setFieldName } from "../createSliceForm";
import PropTypes from "prop-types";
import isEmpty from "../../utils/isEmpty";
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

  const dispatch = useDispatch();

  const addNewInput = (checked) => {
    setAdditionalInput(checked);
  };
  const updateAdditionalDescription = (params) => {
    dispatch(setOtherText({ ...params, keyName: name["en"] }));
  };

  const onChangeCeckbox = (e) => {
    const elemName = e.target.name;

    setChecked((prev) => {
      const newState = { ...prev, ...{ [elemName]: !prev[elemName] } };
      if (require) {
        const isValid =
          Object.values(newState).some((i) => i) && newState.Other !== true;
        dispatch(
          updateForm({
            value: newState,
            isValid: isValid,
            keyName: name.en,
            name: name[lg],
          })
        );
      } else {
        dispatch(
          updateForm({
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
  }, [name, lg, dispatch]);

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
        <Textarea
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
          isValid={isEmpty}
          isFocused={"focused"}
          updateForm={updateAdditionalDescription}
          lg="am"
          required={true}
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
