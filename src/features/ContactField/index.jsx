import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFieldName, updateForm } from "../createSliceForm";

import InputText from "../../components/InputText";

const ContactField = (props) => {
  const dispatch = useDispatch();

  const updateField = (params) => {
    dispatch(updateForm(params));
  };

  useEffect(() => {
    dispatch(
      setFieldName({
        keyName: props.name.en,
        name: props.name[props.lg],
      })
    );
  }, [props.name, props.lg, dispatch]);
  return <InputText {...props} updateForm={updateField} />;
};
export default ContactField;
