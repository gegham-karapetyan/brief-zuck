import React from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./style.scss";

export const InputRange = (props) => {
  return (
    <div>
      <Range
        defaultValue={[24, 44]}
        allowCross={false}
        railStyle={{ height: "1px", backgroundColor: "gray" }}
        trackStyle={[{ height: 3, backgroundColor: "black" }]}
        handleStyle={[style, style]}
        onChange={(e) => props.onChange(e)}
      />
    </div>
  );
};
export const InputSlider = (props) => {
  return (
    <div>
      <Slider
        value={props.value}
        railStyle={{ height: "1px", backgroundColor: "gray" }}
        trackStyle={[{ height: 3, backgroundColor: "black" }]}
        handleStyle={[style, style]}
        onChange={(e) => {
          props.onChange(e);
        }}
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
