import React, { useState } from "react";
import PropTypes from "prop-types";
import InputRadio from "../InputRadio";
import CheckboxesGroup from "../CheckboxesGroup";
import RadioGroup from "../RadioGroup";
import "./style.scss";

const data = [
  "TV",
  "OOH",
  "Social Media",
  "Digital",
  "Print & Publishing",
  "Guerrilla",
  "Influencer/Celebrity/KOL",
  "Product Placement",
  "Use Of Technology",
  "Other",
];

const CampaignScalability = (props) => {
  const [checked, setChecked] = useState({ single: false, multi: true });
  const onChange = (d) => {
    if (d === "Integrated Campaign") {
      setChecked({ single: false, multi: true });
    } else {
      setChecked({ single: true, multi: false });
    }
  };
  return (
    <div className="CampaignScalability">
      <div className="controller">
        <div className="label">Արշավի մասշտաբայնություն *</div>
        <div className="container">
          <InputRadio
            name="Single Channel Campaign"
            checked={checked.single}
            onChange={onChange}
          />
          <InputRadio
            name="Integrated Campaign"
            checked={checked.multi}
            onChange={onChange}
          />
        </div>
      </div>
      <div>
        {checked.multi ? (
          <CheckboxesGroup name="Մեդիաներ *" data={data} />
        ) : (
          <RadioGroup name="Մեդիաներ *" data={data} />
        )}
      </div>
    </div>
  );
};

CampaignScalability.propTypes = {};

export default CampaignScalability;
