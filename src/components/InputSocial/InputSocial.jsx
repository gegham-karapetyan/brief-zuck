import React, { useState, useEffect } from "react";
import UrlBlock from "./UrlBlock";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateForm, setFieldName } from "../../features/createSliceForm";
import { isURL } from "validator";

import "./style.scss";

const InputSocial = ({ name, lg, title }) => {
  const dispatch = useDispatch();
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
      setUrls((prev) => {
        const newData = [...prev, { val: val, id: Math.random() }];
        dispatch(
          updateForm({
            value: newData.map((item) => item.val),
            keyName: name.en,
            name: name[lg],
            isValid: true,
          })
        );
        return newData;
      });
    } else if (!urls.length) setInvalid({ borderColor: "red" });
  };

  const onDelete = (id) => {
    setUrls((prev) => {
      const newData = prev.filter((url) => url.id !== id);
      if (!newData.length) {
        setFocused("");
        setInvalid({ borderColor: "red" });
      }
      dispatch(
        updateForm({
          value: newData.map((item) => item.val),
          keyName: name.en,
          name: name[lg],
          isValid: !!newData.length,
        })
      );
      return newData;
    });
  };
  useEffect(() => {
    dispatch(
      setFieldName({
        keyName: name.en,
        name: name[lg],
      })
    );
  }, [name, lg, dispatch]);
  return (
    <div className={`socialInput ${lg}`}>
      <label className={`socialInputLabel ${focused}`} htmlFor={name}>
        {title[lg]}
      </label>

      {urls && <UrlBlock onClick={onDelete} urls={urls} />}

      <input
        style={valid}
        id={name}
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

InputSocial.propTypes = {
  title: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  lg: PropTypes.string.isRequired,
};

export default InputSocial;
