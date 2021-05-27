import React, { useState } from "react";
import InpuTtext from "../InputText";
import InputCheckbox from "../InputCheckbox";
import * as style from "./style.module.scss";

const CampaignCheckboxes = (props) => {
  const [additionalInput, setAdditionalInput] = useState(false);
  const addNewInput = (checked) => {
    setAdditionalInput(checked);
  };
  return (
    <div className={style.checkboxesGroupName}>
      <div style={{ marginBottom: "40px" }}>{props.name}*</div>
      <div className={style.container}>
        {props.data.map((name) => (
          <InputCheckbox key={name} addNewInput={addNewInput} name={name} />
        ))}
      </div>
      {additionalInput && (
        <InpuTtext
          name={{
            name: "Other description",
            lg: "en",
            required: false,
            hint: false,
          }}
        />
      )}
    </div>
  );
};

export default CampaignCheckboxes;
