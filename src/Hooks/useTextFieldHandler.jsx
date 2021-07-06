import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFieldName, updateForm } from "../features/createSliceForm";

const useTextFieldHandler = (name, required, isValid, lg) => {
  const [focused, setFocused] = useState("");
  const [invalid, setInvalid] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const wasCheckedBySubmitButton = useSelector(
    (state) => state.form[name.en].wasCheckedBySubmitButton
  );
  const isFinallyValid = useSelector((state) => state.form[name.en].isValid);
  const onChange = (e) => {
    const value = e.target.value;
    setValue(e.target.value);
    if (required && !isValid(value)) setInvalid("invalid");
    else setInvalid("");
  };

  const onFocus = () => {
    setFocused("focused");
  };

  const onBlur = (e) => {
    const value = e.target.value.trim();
    dispatch(
      updateForm({
        value,
        isValid: required ? isValid(value) : true,
        keyName: name.en,
      })
    );

    if (!value) {
      setFocused("");
      setValue("");
      if (required) setInvalid("invalid");
    }
  };
  useEffect(() => {
    if (wasCheckedBySubmitButton === true && isFinallyValid === false) {
      setInvalid("invalid");
    }
  }, [wasCheckedBySubmitButton, isFinallyValid]);
  useEffect(() => {
    dispatch(
      setFieldName({
        keyName: name.en,
        name: name[lg],
      })
    );
  }, [name, lg, dispatch]);

  return [focused, invalid, value, onChange, onFocus, onBlur];
};

export default useTextFieldHandler;
