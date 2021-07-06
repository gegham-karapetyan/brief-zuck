import React from "react";
import PropTypes from "prop-types";
import Hint from "../Hint";
import DynamicBox from "../DynamicBox";
import "./style.scss";

const InputLink = ({
  title,
  lg,
  focused,
  name,
  hintText,
  onDelete,
  urls,
  valid,
  createUrlContainer,
  value,
  setValue,
  onFocus,
}) => {
  const id = name.en.replace(/[\s*.,]/g, "");
  return (
    <div className={`InputLink`}>
      <label className={`InputLinkLabel ${lg} ${focused}`} htmlFor={id}>
        {title[lg]}
        {hintText && <Hint hintText={hintText[lg]} />}
      </label>

      {urls && <DynamicBox onClick={onDelete} items={urls} />}

      <input
        style={valid}
        id={id}
        onKeyUp={(e) => {
          if (e.code === "Enter") createUrlContainer(e);
        }}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={focused && "Paste your link and press ENTER"}
        onFocus={onFocus}
        onBlur={createUrlContainer}
        autoComplete="off"
        type="text"
      />
    </div>
  );
};

InputLink.propTypes = {};

export default InputLink;
