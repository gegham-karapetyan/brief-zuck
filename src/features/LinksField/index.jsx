import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { updateThisField, setFieldName } from "../createSliceForm";
import createIdByName from "../../utils/createIdByName";
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
  const [invalid, setInvalid] = useState("");
  const [urls, setUrls] = useState([]);
  const [value, setValue] = useState("");

  const id = createIdByName(name.en);

  const onFocus = () => {
    setFocused("--focused");
  };

  const createUrlContainer = (e) => {
    if (!urls.length && !value) {
      setFocused("");
    }
    if (isURL(value)) {
      setInvalid("");
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
      setInvalid("--invalid");
    } else return;
  };

  const onDelete = (id) => {
    setUrls((prev) => {
      const newData = prev.filter((url) => url.id !== id);
      if (!newData.length) {
        setFocused("");
        setValue("");
        if (required) setInvalid("--invalid");
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
        id,
      })
    );
  }, [name, lg, id, dispatch]);

  useEffect(() => {
    if (wasCheckedBySubmitButton !== 0 && isFinallyValid === false) {
      setInvalid("--invalid");
    }
  }, [wasCheckedBySubmitButton, isFinallyValid]);

  return (
    <InputLink
      title={title}
      lg={lg}
      id={id}
      focused={focused}
      name={name}
      hintText={hintText}
      onDelete={onDelete}
      urls={urls}
      invalid={invalid}
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
