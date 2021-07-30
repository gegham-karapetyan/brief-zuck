import React from "react";
import PropTypes from "prop-types";
import Hint from "../Hint";
import DynamicBox from "../DynamicBox";
import "./style.scss";

const InputLink = ({
  title,
  lg,
  id,
  focused,
  hintText,
  onDelete,
  urls,
  invalid,
  createUrlContainer,
  value,
  setValue,
  onFocus,
}) => {
  return (
    <div className={`field field-links`} id={id}>
      <label
        className={`field-title field-text__title ${focused}`}
        htmlFor={id + "-inner"}
      >
        {title[lg]}
        {hintText && <Hint hintText={hintText[lg]} />}
      </label>

      {urls && <DynamicBox onClick={onDelete} items={urls} />}

      <input
        className={invalid}
        id={id + "-inner"}
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

InputLink.propTypes = {
  title: PropTypes.object.isRequired,
  lg: PropTypes.oneOf(["am", "en", "ru"]),
  id: PropTypes.string.isRequired,
  focused: PropTypes.oneOf(["", "--focused"]),
  hintText: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
  urls: PropTypes.array,
  valid: PropTypes.oneOf(["", "--invalid"]),
  createUrlContainer: PropTypes.func.isRequired,
  value: PropTypes.string,
  setValue: PropTypes.func,
  onFocus: PropTypes.func,
};

export default InputLink;
