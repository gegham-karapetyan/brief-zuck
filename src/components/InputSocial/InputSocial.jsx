import React, { isValidElement, useState } from "react";
import UrlBlock from "./UrlBlock";
import { isURL } from "validator";
import "./style.scss";

let SocialUrls = [];

const InputSocial = (props) => {
  const [focused, setFocused] = useState("");
  const [urls, setUrls] = useState([]);
  const onFocus = () => {
    setFocused("focused");
  };
  console.log(urls);
  const onBlur = (e) => {
    let val = e.target.value;

    if (!val.trim() && !SocialUrls.length) setFocused("");
    else if (isURL(val)) {
      console.log(isURL);
      SocialUrls = [...SocialUrls, { val: val, id: Math.random() }];
      e.target.value = "";
      setUrls(SocialUrls);
    } else console.log("invalid");
  };
  return (
    <div className={`socialInput ${props.name.lg}`}>
      <label
        className={`socialInputLabel ${focused}`}
        htmlFor="socialInput"
      >{`${props.name.name}${props.name.required ? "*" : ""}`}</label>

      {urls && <UrlBlock urls={urls} />}

      <input id="socialInput" onFocus={onFocus} onBlur={onBlur} type="text" />
    </div>
  );
};

export default InputSocial;
