import React, { useState } from "react";
import Textarea from "../Textarea";
import InputCheckbox from "../InputCheckbox";
import PropTypes from "prop-types";
import "./style.scss";

const CampaignCheckboxes = ({ title, lg, data }) => {
  const [additionalInput, setAdditionalInput] = useState(false);
  const addNewInput = (checked) => {
    setAdditionalInput(checked);
  };
  return (
    <div className={"checkboxesGroup"}>
      <div className="title">{title[lg]}</div>
      <div className={"container"}>
        {data.map((item) => (
          <InputCheckbox
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
          lg="am"
          required={false}
          hint={false}
        />
      )}
    </div>
  );
};

CampaignCheckboxes.propTypes = {
  data: PropTypes.array,
  title: PropTypes.object.isRequired,
  lg: PropTypes.string,
};

export default CampaignCheckboxes;
