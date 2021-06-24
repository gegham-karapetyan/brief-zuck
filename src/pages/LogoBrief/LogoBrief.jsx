import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../features/selectBriefReducer";
import DatePicker from "../../components/DatePicker";
import "./style.scss";
import { createForm, resetForm } from "../../features/createSliceForm";

const LogoBrief = (props) => {
  const dispatch = useDispatch();
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    dispatch(selectBriefAC("Logo Brief"));
    dispatch(createForm());
    setShowChildren(true);
    return () => dispatch(resetForm());
  }, [dispatch]);
  return (
    <div>
      {showChildren && (
        <DatePicker
          lg={"en"}
          title={{
            am: "Գովազդային արշավի իրականացման ժամկետներ *",
            en: "Campaign Implementation Timeframe *",
            ru: "",
          }}
          name={{
            am: "Գովազդային արշավի իրականացման ժամկետներ *",
            en: "Campaign Implementation Timeframe *",
            ru: "",
          }}
        />
      )}
    </div>
  );
};

export default LogoBrief;
