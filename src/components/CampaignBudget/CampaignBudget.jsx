import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateForm, setFieldName } from "../../features/createSliceForm";
import { InputRange } from "../InputRC";
import InputRadio from "../InputRadio";
import getTrueKey from "../../utils/getTrueKey";
import "./style.scss";
import { useEffect } from "react";

const CampaignBudget = ({ title, data, lg, name }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState([24, 44]);
  const [currency, setCurrency] = useState({
    USD: true,
    AMD: false,
    RUB: false,
  });

  const onChange = (value) => {
    setValue(value);
  };
  const onAfterChange = (val) => {
    dispatch(
      updateForm({
        value: `${val.map((d) => d * 500).join("-")} ${getTrueKey(currency)}`,
        keyName: name.en,
        name: name[lg],
        isValid: true,
      })
    );
  };
  const changeCurrency = (currencyName) => {
    setCurrency({
      USD: false,
      AMD: false,
      RUB: false,
      [currencyName]: true,
    });
    dispatch(
      updateForm({
        value: `${value.map((d) => d * 500).join("-")} ${currencyName}`,
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
        <span className="output">{`≈ $ ${value[0] * 500} - $ ${
          value[1] * 500
        }`}</span>
      </div>
      <div>
        <InputRange onAfterChange={onAfterChange} onChange={onChange} />
      </div>
    </div>
  );
};

CampaignBudget.propTypes = {};

export default CampaignBudget;
