import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setFiles,
  deleteFiles,
  setOtherText,
  setFieldName,
} from "../../features/createSliceForm";
import InputFile from "../InputFile";
import TextareaAutosize from "react-autosize-textarea";
import "./style.scss";
import DynamicBox from "../DynamicBox";

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
    if (file !== undefined) {
      if (file.size / 1024 ** 2 > 20) {
        alert("the file is too big");
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      console.log(reader);
      reader.addEventListener("load", () => {
        setLoader(false);
        setItems((prev) => {
          const files = [...prev, { name: file.name, val: file, id }];
          return files;
        });
        dispatch(
          setFiles({
            keyName: name.en,
            name: name[lg],
            id,
            value: reader.result,
            isValid: true,
          })
        );
      });
    }
  };

  const onFocus = () => {
    setFocused("focused");
  };

  const onBlur = (e) => {
    const value = e.target.value;
    dispatch(setOtherText({ keyName: name.en, value }));
    if (!value.trim() && !items.length) setFocused("");
  };

  const onDelete = (id) => {
    dispatch(deleteFiles({ id, keyName: name.en }));
    setItems((prev) => prev.filter((url) => url.id !== id));
    if (!items.length && !value.trim()) {
      setFocused("");
    }
  };
  useEffect(() => {
    dispatch(
      setFieldName({
        keyName: name.en,
        name: name[lg],
      })
    );
  }, [name, lg, dispatch]);
  const id = name.en.replace(/[\s*.,]/g, "");

  return (
    <div className="files-box">
      <div className={`header ${focused}`}>
        <label className={lg} htmlFor={id}>
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
        name={name.en}
        id={id}
      />
    </div>
  );
};

export default FilesBox;
