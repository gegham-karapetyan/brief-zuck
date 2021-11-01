import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { InputSlider } from "../InputRC";
import {
  updateForm,
  setFieldName,
} from "../../features/reduxSlices/createSliceForm";
import createIdByName from "../../utils/createIdByName";
import InputCheckboxPlusNumber from "../InputCheckboxPlusNumber/InputCheckboxPlusNumber";
import "./style.scss";

const ContentTypes = ({ title, lg, name }) => {
  const dispatch = useDispatch();

  const [invalid, setInvalid] = useState("");

  const wasCheckedBySubmitButton = useSelector(
    (state) => state.form[name.en].wasCheckedBySubmitButton
  );
  const isFinallyValid = useSelector((state) => state.form[name.en].isValid);

  const id = createIdByName(name.en);

  const onAfterChange = (value) => {
    let str = "";
    const valid = Object.values(value).some((v) => v !== 0);
    Object.keys(value).forEach((k) => {
      str = str + k + " _ " + value[k] + " ; ";
    });

    dispatch(
      updateForm({
        keyName: name.en,
        name: name[lg],
        value: str,
        isValid: valid,
      })
    );
  };
  useEffect(() => {
    dispatch(
      setFieldName({
        keyName: name.en,
        name: name[lg],
        id,
      })
    );
  }, [name, id, lg, dispatch]);

  useEffect(() => {
    if (wasCheckedBySubmitButton && isFinallyValid === false) {
      setInvalid("--invalid");
    } else setInvalid("");
  }, [wasCheckedBySubmitButton, isFinallyValid]);

  return (
    <div className={"field field-select"} id={id}>
      <div className={`field-title field-select__title`}>{title[lg]}</div>
      <div className={"container"}>
        <Contetnt invalid={invalid} onLastChange={onAfterChange} lg={lg} />
      </div>
    </div>
  );
};

const names = {
  "Main visual": {
    am: "Հիմնական վիզուալ",
    ru: "Основной визуал",
    en: "Main visual",
  },
  "Radio clip": {
    am: "Ռադիոհոլովակ",
    ru: "Радиоролик",
    en: "Radio clip",
  },
  Video: {
    am: "Տեսահոլովակ",
    ru: "Видеоролик",
    en: "Video",
  },
  "Activation mechanics": {
    am: "Ակտիվացիայի մեխանիկա",
    ru: "Механика активации",
    en: "Activation mechanics",
  },
};

const Contetnt = ({ lg, onLastChange, invalid }) => {
  // const [values, setValues] = useState(types);
  let types = {
    "Main visual": 0,
    "Radio clip": 0,
    Video: 0,
    "Activation mechanics": 0,
  };

  const onChange = (val) => {
    types = {
      ...types,
      ...val,
    };
    onLastChange(types);
  };
  return (
    <>
      <InputCheckboxPlusNumber
        name="Main visual"
        title={names["Main visual"][lg]}
        onChange={onChange}
        lg={lg}
        invalid={invalid}
      />
      <InputCheckboxPlusNumber
        lg={lg}
        title={names["Radio clip"][lg]}
        onChange={onChange}
        name="Radio clip"
        invalid={invalid}
      />
      <InputCheckboxPlusNumber
        lg={lg}
        title={names["Video"][lg]}
        onChange={onChange}
        name="Video"
        invalid={invalid}
      />
      <InputCheckboxPlusNumber
        lg={lg}
        title={names["Activation mechanics"][lg]}
        onChange={onChange}
        name="Activation mechanics"
        invalid={invalid}
        hintText={{
          am: "Sampling / Influencer etc.",
          ru: "Sampling / Influencer и т. д.",
          en: "Sampling / Influencer etc.",
        }}
      />
    </>
  );
};

export default ContentTypes;
