import React, { useState } from "react";
import { DateRangeInput } from "@datepicker-react/styled";

import { useDispatch } from "react-redux";
import { updateValue } from "./createTestSlice";
import Buttons from "./Buttons";

const Test = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    dispatch(updateValue(e.target.value));
  };
  return (
    <div>
      <input type="text" onChange={onChange} value={value} />
      <Buttons />
    </div>
  );
};
export default Test;
