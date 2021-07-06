import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { updateThisField, setFieldName } from "../createSliceForm";

import InputLink from "../../components/InputLink/InputLink";
import { isURL } from "validator";

import "./style.scss";

const LinksField = ({ name, lg, title, required, hintText }) => {
  const dispatch = useDispatch();
  const wasCheckedBySubmitButton = useSelector(
    (state) => state.form[name.en].wasCheckedBySubmitButton
  );

  const isFinallyValid = useSelector((state) => state.form[name.en].isValid);
  const [focused, setFocused] = useState("");
  const [valid, setInvalid] = useState({ borderColor: "black" });
  const [urls, setUrls] = useState([]);
  const [value, setValue] = useState("");

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

  return (
    <InputLink
      title={title}
      lg={lg}
      focused={focused}
      name={name}
      hintText={hintText}
      onDelete={onDelete}
      urls={urls}
      valid={valid}
      createUrlContainer={createUrlContainer}
      value={value}
      setValue={setValue}
      onFocus={onFocus}
    />
  );
};

LinksField.propTypes = {
  title: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  lg: PropTypes.string.isRequired,
};

export default LinksField;
