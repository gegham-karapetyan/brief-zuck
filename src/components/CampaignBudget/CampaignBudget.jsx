import React, { useState } from "react";
import PropTypes from "prop-types";
import { InputRange } from "../InputRC";
import InputRadio from "../InputRadio";
import "./style.scss";

const CampaignBudget = (props) => {
  const [value, setValue] = useState([100, 200]);
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
        Գովազդային արշավի բյուջե
        <div className="currency-box">
          <InputRadio
            checked={currency.USD}
            onChange={changeCurrency}
            name="USD"
            className="currency"
          />
          <InputRadio
            checked={currency.AMD}
            onChange={changeCurrency}
            name="AMD"
            className="currency"
          />
          <InputRadio
            checked={currency.RUB}
            onChange={changeCurrency}
            name="RUB"
            className="currency"
          />
        </div>
      </div>

      <div className="budget">
        Ընդհանուր՝
        <span className="output">{`≈ $ ${value[0] * 500} - $ ${
          value[1] * 500
        }`}</span>
      </div>
      <div className="gender-age">
        <InputRange onChange={onChange} />
      </div>
    </div>
  );
};

CampaignBudget.propTypes = {};

export default CampaignBudget;
