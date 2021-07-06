import React, { useState, useEffect } from "react";

import DynamicBox from "../DynamicBox/DynamicBox";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { updateThisField, setFieldName } from "../../features/createSliceForm";
import Hint from "../Hint";
import { isURL } from "validator";

import "./style.scss";

const InputSocial = ({ name, lg, title, required, hintText }) => {
  const dispatch = useDispatch();
  const [focused, setFocused] = useState("");
  const [valid, setInvalid] = useState({ borderColor: "black" });
  const [urls, setUrls] = useState([]);
  const [value, setValue] = useState("");

  const wasCheckedBySubmitButton = useSelector(
    (state) => state.form[name.en].wasCheckedBySubmitButton
  );
  const isFinallyValid = useSelector((state) => state.form[name.en].isValid);

  const onFocus = () => {
    setFocused("focused");
  };

  const createUrlContainer = (e) => {
    if (!urls.length && !value) {
      setFocused("");
    }
    if (isURL(value)) {
      setInvalid({ borderColor: "black" });
      setValue("");
      setUrls((prev) => {
        const newData = [...prev, { name: value, id: Math.random() }];

        dispatch(
          updateThisField({
            value: newData.map((item) => item.name),
            keyName: name.en,
            isValid: true,
          })
        );
        return newData;
      });
    } else if (!urls.length && required) {
      setInvalid({ borderColor: "red" });
    } else return;
  };

  const onDelete = (id) => {
    setUrls((prev) => {
      const newData = prev.filter((url) => url.id !== id);
      if (!newData.length) {
        setFocused("");
        setValue("");
        if (required) setInvalid({ borderColor: "red" });
      }
      dispatch(
        updateThisField({
          value: newData.map((item) => item.name),
          keyName: name.en,

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

  useEffect(() => {
    if (wasCheckedBySubmitButton === true && isFinallyValid === false) {
      setInvalid({ borderColor: "red" });
    }
  }, [wasCheckedBySubmitButton, isFinallyValid]);

  const id = name.en.replace(/[\s*.,]/g, "");
  return (
    <div className={`socialInput`}>
      <label className={`socialInputLabel ${lg} ${focused}`} htmlFor={id}>
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

InputSocial.propTypes = {
  title: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  lg: PropTypes.string.isRequired,
};

export default InputSocial;
