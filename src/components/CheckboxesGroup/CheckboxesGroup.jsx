import React, { useState } from "react";
import Textarea from "../Textarea";
import InputCheckbox from "../InputCheckbox";
import PropTypes from "prop-types";
import "./style.scss";

const CampaignCheckboxes = (props) => {
  const [additionalInput, setAdditionalInput] = useState(false);
  const addNewInput = (checked) => {
    setAdditionalInput(checked);
  };
  return (
    <div className={"checkboxesGroup"}>
      <div className="title">{props.title}</div>
      <div className={"container"}>
        {props.data.map((item) => (
          <InputCheckbox
            key={item.name}
            addNewInput={addNewInput}
            name={item.name}
            hintText={item.hintText[props.lg]}
          />
        ))}
      </div>
      {additionalInput && (
        <Textarea
          name="Other description"
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
  title: PropTypes.string,
  lg: PropTypes.string,
};

export default CampaignCheckboxes;
