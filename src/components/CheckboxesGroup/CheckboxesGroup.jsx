import React, { useState } from "react";
import Textarea from "../Textarea";
import InputCheckbox from "../InputCheckbox";
import "./style.scss";

const CampaignCheckboxes = (props) => {
  const [additionalInput, setAdditionalInput] = useState(false);
  const addNewInput = (checked) => {
    setAdditionalInput(checked);
  };
  return (
    <div className={"checkboxesGroup"}>
      <div className="label">{props.name}</div>
      <div className={"container"}>
        {props.data.map((name) => (
          <InputCheckbox key={name} addNewInput={addNewInput} name={name} />
        ))}
      </div>
      {additionalInput && (
        <Textarea
          name={{
            name: "Other description",
            lg: "am",
            required: false,
            hint: false,
          }}
        />
      )}
    </div>
  );
};

export default CampaignCheckboxes;
