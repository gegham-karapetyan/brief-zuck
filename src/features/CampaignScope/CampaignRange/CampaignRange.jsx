import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFieldName } from "../../createSliceForm";
import createIdByName from "../../../utils/createIdByName";
import PropTypes from "prop-types";
import InputRadio from "../../../components/InputRadio";
import "./style.scss";

const CampaignRange = ({ data, lg, onChange, title, checked, name }) => {
  const [invalid, setInvalid] = useState("");

  const wasCheckedBySubmitButton = useSelector(
    (state) => state.form[name.en].wasCheckedBySubmitButton
  );
  const isFinallyValid = useSelector((state) => state.form[name.en].isValid);
  const dispatch = useDispatch();
  const id = createIdByName(name.en);

  useEffect(() => {
    console.log("useEffect id", id);
    dispatch(
      setFieldName({
        keyName: name.en,
        name: name[lg],
        id: id,
      })
    );
  }, [name, lg, id, dispatch]);
  useEffect(() => {
    if (wasCheckedBySubmitButton !== 0 && isFinallyValid === false) {
      setInvalid("--invalid");
    } else setInvalid("");
  }, [wasCheckedBySubmitButton, isFinallyValid]);

  return (
    <div className="field field-select" id={id}>
      <div className={`field-title field-select__title`}>{title[lg]}</div>
      <div className="container">
        {data.map(({ name, hintText, innerText }) => (
          <InputRadio
            key={name}
            invalid={invalid}
            name={name}
            checked={checked[name]}
            hintText={hintText[lg]}
            innerText={innerText}
            lg={lg}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};

CampaignRange.propTypes = {};

export default CampaignRange;
