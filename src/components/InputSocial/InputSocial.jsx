import React, { useState } from "react";
import UrlBlock from "./UrlBlock";
import { isURL } from "validator";
import "./style.scss";

let SocialUrls = [];

const InputSocial = (props) => {
  const [focused, setFocused] = useState("");
  const [valid, setInvalid] = useState({ borderColor: "black" });
  const [urls, setUrls] = useState([]);
  const onFocus = () => {
    setFocused("focused");
  };

  const onBlur = (e) => {
    let val = e.target.value;

    if (!val.trim() && !SocialUrls.length) {
      setFocused("");
      setInvalid({ borderColor: "red" });
    } else if (isURL(val)) {
      SocialUrls = [...SocialUrls, { val: val, id: Math.random() }];
      setInvalid({ borderColor: "black" });
      e.target.value = "";
      setUrls(SocialUrls);
    } else if (!SocialUrls.length) setInvalid({ borderColor: "red" });
  };

  const onDelete = (id) => {
    SocialUrls = SocialUrls.filter((url) => url.id !== id);
    setUrls(SocialUrls);
    if (!SocialUrls.length) {
      setFocused("");
      setInvalid({ borderColor: "red" });
    }
  };

  return (
    <div className={`socialInput ${props.name.lg}`}>
      <label className={`socialInputLabel ${focused}`} htmlFor="socialInput">
        {props.name.name}
      </label>

      {urls && <UrlBlock onClick={onDelete} urls={urls} />}

      <input
        style={valid}
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
