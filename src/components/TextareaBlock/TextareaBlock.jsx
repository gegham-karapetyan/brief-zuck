import React from "react";
import TextareaAutosize from "react-autosize-textarea";
import PropTypes from "prop-types";
import Hint from "../Hint";

import "./style.scss";

const TextareaBlock = ({
  title,
  lg,
  name,
  hintText,
  focused,
  onFocus,
  onBlur,
  invalid,
  value,
  onChange,
  internalRef,
}) => {
  return (
    <div>
      <label className={`textarea ${lg}`}>
        <div className={`textareaLabel ${focused}`}>
          {title[lg]}
          {hintText && <Hint hintText={hintText[lg]} />}
        </div>
        <TextareaAutosize
          ref={internalRef}
          className={invalid}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          name={name["en"]}
        />
      </label>
    </div>
  );
};

TextareaBlock.propTypes = {
  title: PropTypes.object,
  name: PropTypes.object.isRequired,
  lg: PropTypes.string.isRequired,
  focused: PropTypes.oneOf(["", "focused"]),
  required: PropTypes.bool,
  hintText: PropTypes.object,
  hint: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextareaBlock;
