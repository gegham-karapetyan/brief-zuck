import React, { useState } from "react";

import InputFile from "../InputFile";
import TextareaAutosize from "react-autosize-textarea";
import "./style.scss";
import DynamicBox from "../DynamicBox";

const FilesBox = ({ name, lg, title }) => {
  const [focused, setFocused] = useState("");
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const addFile = (e) => {
    const file = e.target.files[0];

    setFocused("focused");
    setItems((prev) => [
      ...prev,
      { name: file.name, val: file, id: Math.random() },
    ]);
  };

  const onFocus = () => {
    setFocused("focused");
  };

  const onBlur = (e) => {
    let val = e.target.value;

    if (!val.trim() && !items.length) setFocused("");
  };

  const onDelete = (id) => {
    setItems((prev) => prev.filter((url) => url.id !== id));
    if (!items.length && !value.trim()) {
      setFocused("");
    }
  };

  return (
    <div className="files-box">
      <div className={`header ${focused}`}>
        <label className={lg} htmlFor={name}>
          {title[lg]}
        </label>

        <InputFile onChange={addFile} />
      </div>
      <DynamicBox items={items} onClick={onDelete} />
      <TextareaAutosize
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        name={name}
        id={name}
      />
    </div>
  );
};

export default FilesBox;
