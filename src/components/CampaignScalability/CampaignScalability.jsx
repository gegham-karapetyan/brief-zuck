import React from "react";
import PropTypes from "prop-types";
import InputRadio from "../InputRadio";
import "./style.scss";

const CampaignScalability = (props) => {
  const onChange = () => {
    console.log("change");
  };
  return (
    <div>
      <InputRadio name="int" checked={false} onChange={onChange} />
      <InputRadio name="sdfg" checked={true} onChange={onChange} />
    </div>
  );
};

CampaignScalability.propTypes = {};

export default CampaignScalability;
