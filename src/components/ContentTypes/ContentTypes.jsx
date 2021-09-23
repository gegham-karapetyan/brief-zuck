import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputSlider } from "../InputRC";
import {
  updateForm,
  setFieldName,
} from "../../features/reduxSlices/createSliceForm";
import createIdByName from "../../utils/createIdByName";
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
    <div className="field field-range" id={id}>
      <div className={`field-title field-range__title`}>{title[lg]}</div>

      <Contetnt invalid={invalid} onLastChange={onAfterChange} lg={lg} />
    </div>
  );
};

const types = {
  "Main visual": 0,
  "Radio clip": 0,
  Video: 0,
  "Activation mechanics (Sampling / Influencer etc.)": 0,
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
  "Activation mechanics (Sampling / Influencer etc.)": {
    am: "Ակտիվացիայի մեխանիկա (Sampling / Influencer etc.)",
    ru: "Механика активации (Sampling / Influencer и т. д.)",
    en: "Activation mechanics (Sampling / Influencer etc.)",
  },
};

const Contetnt = ({ lg, onLastChange, invalid }) => {
  const [values, setValues] = useState(types);

  const onChangeVisual = (val) => {
    setValues((prev) => ({
      ...prev,
      "Main visual": val,
    }));
  };
  const onChangeVideo = (val) => {
    setValues((prev) => ({
      ...prev,
      Video: val,
    }));
  };
  const onChangeRadio = (val) => {
    setValues((prev) => ({
      ...prev,
      "Radio clip": val,
    }));
  };
  const onChangeActivation = (val) => {
    setValues((prev) => ({
      ...prev,
      "Activation mechanics (Sampling / Influencer etc.)": val,
    }));
  };

  const onAfterChange = () => {
    const tmp = {};
    const Keys = Object.keys(names);
    Keys.forEach((k) => {
      const n = names[k][lg];
      tmp[n] = values[k];
    });
    console.log(tmp);
    onLastChange(tmp);
  };

  return (
    <div className={`subgroup man ${invalid}`}>
      <div className="gender">
        {names["Main visual"][lg]}
        <span className="output">{values["Main visual"]} </span>
      </div>
      <div className="percentage">
        <InputSlider
          max={20}
          onAfterChange={onAfterChange}
          value={values["Main visual"]}
          onChange={onChangeVisual}
        />
      </div>
      <div className="gender">
        {names["Video"][lg]} <span className="output">{values.Video}</span>
      </div>
      <div className="percentage">
        <InputSlider
          max={20}
          onAfterChange={onAfterChange}
          value={values.Video}
          onChange={onChangeVideo}
        />
      </div>
      <div className="gender">
        {names["Radio clip"][lg]}{" "}
        <span className="output">{values["Radio clip"]} </span>
      </div>
      <div className="percentage">
        <InputSlider
          max={20}
          onAfterChange={onAfterChange}
          value={values["Radio clip"]}
          onChange={onChangeRadio}
        />
      </div>
      <div className="gender">
        {names["Activation mechanics (Sampling / Influencer etc.)"][lg]}

        <span className="output">
          {values["Activation mechanics (Sampling / Influencer etc.)"]}
        </span>
      </div>
      <div className="percentage">
        <InputSlider
          max={20}
          onAfterChange={onAfterChange}
          value={values["Activation mechanics (Sampling / Influencer etc.)"]}
          onChange={onChangeActivation}
        />
      </div>
    </div>
  );
};

export default ContentTypes;
