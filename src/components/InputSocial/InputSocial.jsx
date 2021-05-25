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

  const onBlur = (e) => {
    let val = e.target.value;

    if (!val.trim() && !SocialUrls.length) setFocused("");
    else if (isURL(val)) {
      SocialUrls = [...SocialUrls, { val: val, id: Math.random() }];
      e.target.value = "";
      setUrls(SocialUrls);
    } else console.log("invalid");
  };

  const onDelete = (id) => {
    SocialUrls = SocialUrls.filter((url) => url.id !== id);
    setUrls(SocialUrls);
  };

  return (
    <div className={`socialInput ${props.name.lg}`}>
      <label
        className={`socialInputLabel ${focused}`}
        htmlFor="socialInput"
      >{`${props.name.name}${props.name.required ? "*" : ""}`}</label>

      {urls && <UrlBlock onClick={onDelete} urls={urls} />}

      <input
        id="socialInput"
        onKeyUp={(e) => {
          if (e.code === "Enter") onBlur(e);
        }}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete="off"
        type="text"
      />
    </div>
  );
};

export default InputSocial;
