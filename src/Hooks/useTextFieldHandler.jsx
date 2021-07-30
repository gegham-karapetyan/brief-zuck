import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFieldName, updateThisField } from "../features/createSliceForm";
import createIdByName from "../utils/createIdByName";

const useTextFieldHandler = (name, required, isValid, lg) => {
  const [focused, setFocused] = useState("");
  const [invalid, setInvalid] = useState("");
  const [value, setValue] = useState("");
  const componentRef = useRef(null);

  const id = createIdByName(name.en);
  const dispatch = useDispatch();

  const wasCheckedBySubmitButton = useSelector(
    (state) => state.form[name.en].wasCheckedBySubmitButton
  );
  const isFinallyValid = useSelector((state) => state.form[name.en].isValid);
  const onChange = (e) => {
    const value = e.target.value;
    setValue(e.target.value);
    if (required && !isValid(value)) setInvalid("--invalid");
    else setInvalid("");
  };

  const onFocus = () => {
    setFocused("--focused");
  };

  const onBlur = (e) => {
    const value = e.target.value.trim();

    dispatch(
      updateThisField({
        value,
        isValid: required ? isValid(value) : true,
        keyName: name.en,
      })
    );

    if (!value) {
      setFocused("");
      setValue("");
      if (required) setInvalid("--invalid");
    }
  };

  useEffect(() => {
    if (wasCheckedBySubmitButton && isFinallyValid === false) {
      setInvalid("--invalid");
    }
  }, [wasCheckedBySubmitButton, isFinallyValid, name, dispatch]);
  useEffect(() => {
    dispatch(
      setFieldName({
        keyName: name.en,
        name: name[lg],
        id: id,
      })
    );
  }, [name, lg, id, dispatch]);

  return {
    focused,
    invalid,
    value,
    id,
    componentRef,
    onChange,
    onFocus,
    onBlur,
  };
};

export default useTextFieldHandler;
