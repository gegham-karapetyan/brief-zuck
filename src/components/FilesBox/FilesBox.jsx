import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setFiles,
  deleteFiles,
  setOtherText,
} from "../../features/createSliceForm";
import InputFile from "../InputFile";
import TextareaAutosize from "react-autosize-textarea";
import "./style.scss";
import DynamicBox from "../DynamicBox";

window.files = [];
const FilesBox = ({ name, lg, title }) => {
  const dispatch = useDispatch();
  const [focused, setFocused] = useState("");
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const [loader, setLoader] = useState(true);
  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const addFile = (e) => {
    const id = Math.random();
    const file = e.target.files[0];

    setFocused("focused");
    setItems((prev) => {
      const files = [...prev, { name: file.name, val: file, id }];

      return files;
    });
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", () => {
      setLoader(false);
      dispatch(setFiles({ name, id, value: reader.result, isValid: true }));
    });
  };

  const onFocus = () => {
    setFocused("focused");
  };

  const onBlur = (e) => {
    const value = e.target.value;
    dispatch(setOtherText({ name, value }));
    if (!value.trim() && !items.length) setFocused("");
  };

  const onDelete = (id) => {
    dispatch(deleteFiles({ id, name }));
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
      <DynamicBox loader={loader} items={items} onClick={onDelete} />
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
