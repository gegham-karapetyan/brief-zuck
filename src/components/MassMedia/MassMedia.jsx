import React, { useState } from "react";

import InputRadio from "../InputRadio";
import CheckboxesGroup from "../CheckboxesGroup";
import RadioGroup from "../RadioGroup";
import "./style.scss";

const MassMedia = ({ data, title, lg }) => {
  const [checked, setChecked] = useState({ single: false, multi: true });
  const onChange = (d) => {
    if (d === "Integrated Campaign") {
      setChecked({ single: false, multi: true });
    } else {
      setChecked({ single: true, multi: false });
    }
  };
  return (
    <div className="massMedia">
      <div className="controller">
        <div className="label">{title[lg]}</div>
        <div className="container">
          <InputRadio
            name={data[0][0].name}
            checked={checked.single}
            hintText={data[0][0].hintText[lg]}
            title={data[0][0].title}
            lg={lg}
            onChange={onChange}
          />
          <InputRadio
            name={data[0][1].name}
            checked={checked.multi}
            hintText={data[0][1].hintText[lg]}
            title={data[0][1].title}
            lg={lg}
            onChange={onChange}
          />
        </div>
      </div>
      <div>
        {checked.multi ? (
          <CheckboxesGroup
            lg={lg}
            title={{
              am: "Մեդիաներ *",
              en: "Media *",
              ru: "",
            }}
            data={data[1]}
          />
        ) : (
          <RadioGroup
            lg={lg}
            title={{
              am: "Մեդիաներ *",
              en: "Media *",
              ru: "",
            }}
            data={data[1]}
          />
        )}
      </div>
    </div>
  );
};

export default MassMedia;
