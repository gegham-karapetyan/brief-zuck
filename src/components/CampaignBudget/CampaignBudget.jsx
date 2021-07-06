import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateForm, setFieldName } from "../../features/createSliceForm";
import { InputRange } from "../InputRC";
import InputRadio from "../InputRadio";

import "./style.scss";
import { useEffect } from "react";

const rates = {
  USD: { degree: 500, sign: "\u0024" },
  AMD: { degree: 250000, sign: "\u058F" },
  RUB: { degree: 35000, sign: "\u20BD" },
};

function formatNumber(num) {
  num = String(num);
  let tmp = "";
  let len = num.length - 1;
  for (let i = len, t = 0; i >= 0; i--, t++) {
    if (t % 3 === 0) tmp += " ";
    tmp += num[i];
  }

  return tmp.split("").reverse().join("").trim();
}

const formatCurrencyValue = (value, rate) => {
  let value1 = value[0] * rate.degree;
  let value2 = value[1] * rate.degree;
  let sign = rate.sign;

  return `≈ ${sign} ${formatNumber(value1)} - ${sign} ${formatNumber(value2)}`;
};

const CampaignBudget = ({ title, data, lg, name }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState([24, 44]);
  const [rate, setRate] = useState({ degree: 500, sign: "$" });
  const [currency, setCurrency] = useState({
    USD: true,
    AMD: false,
    RUB: false,
  });

  const onChange = (value) => {
    setValue(value);
  };
  const onAfterChange = (value) => {
    dispatch(
      updateForm({
        value: formatCurrencyValue(value, rate),
        keyName: name.en,
        name: name[lg],
        isValid: true,
      })
    );
  };
  const changeCurrency = (e) => {
    const currencyName = e.target.name;
    setRate(rates[currencyName]);

    setCurrency({
      USD: false,
      AMD: false,
      RUB: false,
      [currencyName]: true,
    });
    dispatch(
      updateForm({
        value: formatCurrencyValue(value, rates[currencyName]),
        keyName: name.en,
        name: name[lg],
        isValid: true,
      })
    );
  };
  useEffect(() => {
    dispatch(
      setFieldName({
        keyName: name.en,
        name: name[lg],
      })
    );
  }, [name, lg, dispatch]);
  return (
    <div className="campaign-budget">
      <div className={`label ${lg}`}>
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
        <span className="output">{formatCurrencyValue(value, rate)}</span>
      </div>
      <div>
        <InputRange onAfterChange={onAfterChange} onChange={onChange} />
      </div>
    </div>
  );
};

CampaignBudget.propTypes = {};

export default CampaignBudget;
