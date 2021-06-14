import React, { useState } from "react";
import PropTypes from "prop-types";
import { InputRange } from "../InputRC";
import InputRadio from "../InputRadio";
import "./style.scss";

const CampaignBudget = ({ title, data, lg }) => {
  const [value, setValue] = useState([24, 44]);
  const [currency, setCurrency] = useState({
    USD: true,
    AMD: false,
    RUB: false,
  });

  const onChange = (value) => {
    setValue(value);
  };

  const changeCurrency = (name) => {
    setCurrency({
      USD: false,
      AMD: false,
      RUB: false,
      [name]: true,
    });
  };
  return (
    <div className="campaign-budget">
      <div className="label">
        {title[lg][0]}

        <div className="currency-box">
          <InputRadio
            checked={currency.USD}
            onChange={changeCurrency}
            name="USD"
            className="currency"
            title={data[0]}
            lg={lg}
          />
          <InputRadio
            checked={currency.AMD}
            onChange={changeCurrency}
            name="AMD"
            className="currency"
            title={data[1]}
            lg={lg}
          />
          <InputRadio
            checked={currency.RUB}
            onChange={changeCurrency}
            name="RUB"
            className="currency"
            title={data[2]}
            lg={lg}
          />
        </div>
      </div>

      <div className="budget">
        {title[lg][1]}
        <span className="output">{`≈ $ ${value[0] * 500} - $ ${
          value[1] * 500
        }`}</span>
      </div>
      <div>
        <InputRange onChange={onChange} />
      </div>
    </div>
  );
};

CampaignBudget.propTypes = {};

export default CampaignBudget;
