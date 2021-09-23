import React from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./style.scss";

export const InputRange = (props) => {
  return (
    <div>
      <Range
        disabled={props.disabled}
        onAfterChange={props.onAfterChange}
        defaultValue={props.defaultValue || [24, 44]}
        allowCross={false}
        railStyle={{ height: "1px", backgroundColor: "gray" }}
        trackStyle={[
          { height: 3, backgroundColor: props.disabled ? "gray" : "black" },
        ]}
        handleStyle={
          props.disabled ? [styleDisabled, styleDisabled] : [style, style]
        }
        onChange={(e) => props.onChange(e)}
      />
    </div>
  );
};
export const InputSlider = (props) => {
  return (
    <div>
      <Slider
        disabled={props.disabled}
        max={props.max || 100}
        onAfterChange={props.onAfterChange}
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
const styleDisabled = {
  height: 16,
  width: 16,
  borderRadius: 0,
  marginTop: -7,
  backgroundColor: "gray",
  borderColor: "gray",
  boxShadow: "none",
};
