import React from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./style.scss";

const createSliderWithTooltip = Slider.createSliderWithTooltip;

//const Range = createSliderWithTooltip(Slider.Range);

const InputRange = (props) => {
  return (
    <div>
      <Range
        defaultValue={[24, 44]}
        railStyle={{ height: "1px", backgroundColor: "gray" }}
        trackStyle={[{ height: 3, backgroundColor: "black" }]}
        handleStyle={[style, style]}
      />
    </div>
  );
};

const style = {
  height: 16,
  width: 16,
  borderRadius: 0,
  marginTop: -7,
  backgroundColor: "black",
  borderColor: "black",
  boxShadow: "none",
};

export default InputRange;
