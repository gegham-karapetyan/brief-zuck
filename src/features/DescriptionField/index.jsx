import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFieldName, updateForm } from "../reduxSlices/createSliceForm";

import Textarea from "../../components/Textarea";

const DescriptionField = (props) => {
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
  return <Textarea {...props} updateForm={updateField} />;
};
export default DescriptionField;
