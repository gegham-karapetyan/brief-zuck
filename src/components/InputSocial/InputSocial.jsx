import React, { useState } from "react";
import UrlBlock from "./UrlBlock";
import { isURL } from "validator";

import "./style.scss";

const InputSocial = (props) => {
  const [focused, setFocused] = useState("");
  const [valid, setInvalid] = useState({ borderColor: "black" });
  const [urls, setUrls] = useState([]);
  const onFocus = () => {
    setFocused("focused");
  };

  const onBlur = (e) => {
    let val = e.target.value;

    if (!val.trim() && !urls.length) {
      setFocused("");
      setInvalid({ borderColor: "red" });
    } else if (isURL(val)) {
      setInvalid({ borderColor: "black" });
      e.target.value = "";
      setUrls((prev) => [...prev, { val: val, id: Math.random() }]);
    } else if (!urls.length) setInvalid({ borderColor: "red" });
  };

  const onDelete = (id) => {
    setUrls((prev) => prev.filter((url) => url.id !== id));
    if (!urls.length) {
      setFocused("");
      setInvalid({ borderColor: "red" });
    }
  };

  return (
    <div className={`socialInput ${props.name.lg}`}>
      <label
        className={`socialInputLabel ${focused}`}
        htmlFor={props.name.name}
      >
        {props.name.name}
      </label>

      {urls && <UrlBlock onClick={onDelete} urls={urls} />}

      <input
        style={valid}
        id={props.name.name}
        onKeyUp={(e) => {
          if (e.code === "Enter") onBlur(e);
        }}
        placeholder={focused && "Paste your link and press ENTER"}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete="off"
        type="text"
      />
    </div>
  );
};

export default InputSocial;
