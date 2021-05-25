import React from "react";
import InputCheckbox from "../InputCheckbox";
import * as style from "./style.module.scss";

const CampaignCheckboxes = (props) => {
  return (
    <div className={style.campaignType}>
      <div style={{ marginBottom: "40px" }}>{props.name}*</div>
      <div className={style.container}>
        <InputCheckbox name={"Traditional media/image campaign"} />
        <InputCheckbox name={"Teaser campaign"} />
        <InputCheckbox name={"Seasonal push campaign"} />
        <InputCheckbox name={"Product/service launch campaign"} />
        <InputCheckbox name={"Brand awareness campaign"} />
        <InputCheckbox name={"Rebranding campaign"} />
        <InputCheckbox name={"Brand launch campaign"} />
        <InputCheckbox name={"Ecommerce campaign"} />
        <InputCheckbox
          name={"Corporate social responsibility (SCR) campaign"}
        />
        <InputCheckbox name={"Contest marketing campaign"} />
        <InputCheckbox name={"Lead generation campaign"} />
        <InputCheckbox name={"Other"} />
      </div>
    </div>
  );
};

export default CampaignCheckboxes;
