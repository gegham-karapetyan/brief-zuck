import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateForm, setFieldName } from "../reduxSlices/createSliceForm";
//import InputRadio from "../../components/InputRadio";
import CampaignRange from "./CampaignRange";
import CheckboxesGroup from "../CheckboxesGroup";
import RadioGroup from "../RadioGroup";
import "./style.scss";

function isValidCheckboxes(obj) {
  return Object.values(obj).filter((i) => i).length >= 2;
}

const CampaignScope = ({ data, title, lg, name }) => {
  const { MEDIA_TYPES, CAMPAIGN_RANGE } = data;
  const initialState = {
    [CAMPAIGN_RANGE[0].name]: false,
    [CAMPAIGN_RANGE[1].name]: false,
  };

  const [checked, setChecked] = useState(initialState);

  const defineScope = (checked) => {
    if (checked["Integrated Campaign"]) {
      return (
        <CheckboxesGroup
          name={{
            am: "Մեդիաներ",
            en: "Media",
            ru: "Медиа",
          }}
          require={true}
          isValidCheckboxes={isValidCheckboxes}
          lg={lg}
          title={{
            am: "Մեդիաներ",
            en: "Media",
            ru: "Медиа",
          }}
          data={MEDIA_TYPES}
        />
      );
    } else if (checked["Single Channel Campaign"]) {
      return (
        <RadioGroup
          name={{
            am: "Մեդիաներ",
            en: "Media",
            ru: "Медиа",
          }}
          lg={lg}
          title={{
            am: "Մեդիաներ",
            en: "Media",
            ru: "Медиа",
          }}
          require={true}
          data={MEDIA_TYPES}
        />
      );
    } else return null;
  };
  const dispatch = useDispatch();
  const onChange = (e) => {
    const inputName = e.target.name;

    dispatch(
      updateForm({
        value: inputName,
        isValid: true,
        keyName: name.en,
      })
    );
    dispatch(
      updateForm({
        value: {},
        isValid: false,
        keyName: "Media",
      })
    );
    const newState = { ...initialState, [inputName]: true };

    setChecked(newState);
  };

  return (
    <div className="field field-complex">
      <CampaignRange
        data={CAMPAIGN_RANGE}
        lg={lg}
        name={name}
        onChange={onChange}
        title={title}
        checked={checked}
      />

      {defineScope(checked)}
    </div>
  );
};

export default CampaignScope;
