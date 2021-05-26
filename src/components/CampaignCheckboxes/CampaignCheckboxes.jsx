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
    <div className={style.campaignType}>
      <div style={{ marginBottom: "40px" }}>{props.name}*</div>
      <div className={style.container}>
        <InputCheckbox
          addNewInput={addNewInput}
          name={"Traditional media/image campaign"}
        />
        <InputCheckbox addNewInput={addNewInput} name={"Teaser campaign"} />
        <InputCheckbox
          addNewInput={addNewInput}
          name={"Seasonal push campaign"}
        />
        <InputCheckbox
          addNewInput={addNewInput}
          name={"Product/service launch campaign"}
        />
        <InputCheckbox
          addNewInput={addNewInput}
          name={"Brand awareness campaign"}
        />
        <InputCheckbox addNewInput={addNewInput} name={"Rebranding campaign"} />
        <InputCheckbox
          addNewInput={addNewInput}
          name={"Brand launch campaign"}
        />
        <InputCheckbox addNewInput={addNewInput} name={"Ecommerce campaign"} />
        <InputCheckbox
          addNewInput={addNewInput}
          name={"Corporate social responsibility (SCR) campaign"}
        />
        <InputCheckbox
          addNewInput={addNewInput}
          name={"Contest marketing campaign"}
        />
        <InputCheckbox
          addNewInput={addNewInput}
          name={"Lead generation campaign"}
        />
        <InputCheckbox addNewInput={addNewInput} name={"Other"} />
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
