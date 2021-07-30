import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFiles,
  deleteFiles,
  setAdditionalInfoAsPlainText,
  setFieldName,
} from "../../features/createSliceForm";
import createIdByName from "../../utils/createIdByName";

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
  const [invalid, setInvalid] = useState("");
  const componentRef = useRef(null);
  const onChange = (e) => {
    const value = e.target.value;
    if (value.trim().length >= 2 || items.length) {
      setInvalid("");
    }
    setValue(value);
  };
  const wasCheckedBySubmitButton = useSelector(
    (state) => state.form[name.en].wasCheckedBySubmitButton
  );
  const isFinallyValid = useSelector((state) => state.form[name.en].isValid);

  const addFile = (e) => {
    const id = Math.random();
    const file = e.target.files[0];

    setFocused("--focused");
    if (file !== undefined) {
      if (file.size / 1024 ** 2 > 20) {
        alert("the file is too big");
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.addEventListener("load", () => {
        setLoader(false);
        setInvalid("");
        setItems((prev) => {
          const files = [...prev, { name: file.name, val: file, id }];
          dispatch(
            setFiles({
              keyName: name.en,
              name: name[lg],
              id,
              value: reader.result,
              isValid: true,
            })
          );
          return files;
        });
      });
    }
  };

  const onFocus = () => {
    setFocused("--focused");
  };

  const onBlur = (e) => {
    const value = e.target.value;

    dispatch(setAdditionalInfoAsPlainText({ keyName: name.en, value }));
    if (!value.trim() && !items.length) setFocused("");
    if (value.trim().length < 2 && !items.length) {
      setInvalid("--invalid");
    } else setInvalid("");
  };

  const onDelete = (id) => {
    dispatch(deleteFiles({ id, keyName: name.en }));
    setItems((prev) => {
      const newState = prev.filter((url) => url.id !== id);
      if (!newState.length && value.trim().length < 2) {
        setInvalid("--invalid");
      }
      return newState;
    });
  };

  const id = createIdByName(name.en);
  useEffect(() => {
    dispatch(
      setFieldName({
        keyName: name.en,
        name: name[lg],
        id,
      })
    );
  }, [name, id, lg, dispatch]);

  useEffect(() => {
    if (wasCheckedBySubmitButton !== 0 && isFinallyValid === false) {
      setInvalid("--invalid");
    }
  }, [wasCheckedBySubmitButton, isFinallyValid, name, dispatch]);

  return (
    <div ref={componentRef} className="field field-files" id={id}>
      <div className={`header ${focused}`}>
        <label className={"field-title"} htmlFor={id + "--inner"}>
          {title[lg]}
        </label>

        <InputFile onChange={addFile} />
      </div>
      <DynamicBox loader={loader} items={items} onClick={onDelete} />
      <TextareaAutosize
        className={invalid}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        name={name.en}
        id={id + "--inner"}
      />
    </div>
  );
};

export default FilesBox;
