import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../features/selectBriefReducer";

// import DayPickerInput from "../../components/DayPickerInput";
// import "react-day-picker/lib/style.css";
// import "./style.scss";

const StrategyBrief = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectBriefAC("Strategy Brief"));
  });
  return (
    <div>
      <Styled onClick={(e) => console.log(e)} />
      <Styled2 />
    </div>
  );
};

export default StrategyBrief;

function withS(param) {
  return (Component) => {
    return (props) => <Component {...props} {...param} />;
  };
}
const Elem = (props) => {
  console.log(props);
  return (
    <div onClick={(e) => props.onClick(e)} nma="elem" style={props.styles}>
      qwerqetqretert
    </div>
  );
};

const Elem2 = (props) => {
  const [s, setS] = useState("qw");
  return (
    <div onClick={(e) => setS(s.repeat(2))} nma="elem" style={props.styles}>
      {s}
    </div>
  );
};
const Styled = withS({ styles: { color: "red" } })(Elem);
const Styled2 = withS({ styles: { color: "red" } })(Elem2);
