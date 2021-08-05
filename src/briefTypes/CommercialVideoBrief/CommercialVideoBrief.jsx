import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { useLocation } from "react-router-dom";
// import { selectBriefAC } from "../../features/selectBriefReducer";
//import "react-calendar/dist/Calendar.css";
// import Test from "./Test";
import {
  createVideoBriefForm,
  resetForm,
} from "../../features/reduxSlices/createSliceForm";
import ContactField from "../../features/ContactField";
import contactsProps from "../data/ContactsProps";
import TextareaField from "../../features/TextareaField";

import {
  Summary,
  Additional_information_about_the_target,
  Scenario_ideas,
  Adaptations_of_the_video,
  Current_Consumer_Feedback,
  Desired_Consumer_Behavior_Video,
  Expected_Consumer_Feedback_Video,
  USP_Brand_promise,
  Insight,
  Main_message_of_the_video,
  Secondary_message_of_the_video,
  RTB,
  Barrier,
  Essential_elements,
  Excluded_elements,
  Agencys_Task,
  Preferred_director,
  Packshot,
  KPIs,
  Current_Consumer_Behavior,
} from "../data/TextareaFieldsProps";

const CommercialVideoBrief = ({ lg }) => {
  const [showChildren, setShowChildren] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createVideoBriefForm());
    setShowChildren(true);
    //return () => dispatch(resetForm());
  }, [dispatch]);
  return (
    <div>
      {showChildren &&
        contactsProps.map((item) => <ContactField {...item} lg={lg} />)}
      <TextareaField {...Summary} lg={lg} />
      <TextareaField {...Scenario_ideas} lg={lg} />
      {/* <TextareaField {...Adaptations_of_the_video} lg={lg} /> */}
      {/* <TextareaField {...Current_Consumer_Behavior} lg={lg} /> */}

      {/* <TextareaField {...Current_Consumer_Feedback} lg={lg} /> */}
      {/* <TextareaField {...Desired_Consumer_Behavior_Video} lg={lg} /> */}

      {/* <TextareaField {...Expected_Consumer_Feedback_Video} lg={lg} /> */}
      <TextareaField {...USP_Brand_promise} lg={lg} />

      <TextareaField {...Insight} lg={lg} />
      {/* <TextareaField {...Main_message_of_the_video} lg={lg} /> */}
      {/* <TextareaField {...Secondary_message_of_the_video} lg={lg} /> */}

      <TextareaField {...RTB} lg={lg} />
      {/* <TextareaField {...Barrier} lg={lg} /> */}
      {/* <TextareaField {...Essential_elements} lg={lg} /> */}
      {/* <TextareaField {...Excluded_elements} lg={lg} /> */}
      {/* <TextareaField {...Packshot} lg={lg} /> */}
      <TextareaField {...Agencys_Task} lg={lg} />

      <TextareaField {...KPIs} lg={lg} />
      {/* <TextareaField {...Preferred_director} lg={lg} /> */}
    </div>
  );
};

export default CommercialVideoBrief;
