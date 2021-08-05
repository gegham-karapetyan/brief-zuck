import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TextareaField from "../../features/TextareaField";
import { selectBriefAC } from "../../features/selectBriefReducer";
import {
  createForm,
  resetForm,
} from "../../features/reduxSlices/createSliceForm";
//import "./style.scss";

const SocialMediaActivationBrief = (props) => {
  const [showChildren, setShowChildren] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectBriefAC("Social Media Activation Brief"));
    dispatch(createForm());
    setShowChildren(true);
    return () => dispatch(resetForm());
  }, [dispatch]);
  return (
    <>
      {showChildren && (
        <TextareaField
          title={{
            am: "Գործակալության առաջադրանքը",
            en: "Agency Tasks",
            ru: "Задача агентства",
          }}
          name={{
            am: "Գործակալության առաջադրանքը",
            en: "Agency Tasks",
            ru: "Задача агентства",
          }}
          required={true}
          isValid={(v) => v.length > 2}
          hint={false}
          lg="en"
        />
      )}
    </>
  );
};

export default SocialMediaActivationBrief;
