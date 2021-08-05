import { useDispatch } from "react-redux";
import { setOtherText } from "../../features/reduxSlices/createSliceForm";

import Textarea from "../../components/Textarea";

const AdditionalDescription = (props) => {
  const dispatch = useDispatch();

  const updateField = (params) => {
    dispatch(setOtherText(params));
  };

  return <Textarea {...props} updateForm={updateField} />;
};
export default AdditionalDescription;
