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
import TargetGroup from "../../components/TargetGroup";
import HyperactiveBuyers from "../../components/HyperactiveBuyers";
import FilesBox from "../../components/FilesBox";

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
  Essential_elements_Video,
  Excluded_elements_Video,
  Agencys_Task,
  Preferred_director,
  Packshot,
  KPIs_Video,
  Current_Consumer_Behavior,
} from "../data/TextareaFieldsProps";
import RadioGroup from "../../features/RadioGroup";
import videoFormats from "../data/VideoFormats";
import videoTypes from "../data/VideoTypes";
import videoMood from "./../data/VideoMood";
import CampaignType from "./../../features/CampaignType";
import VideoPromotion from "../data/VideoPromotion";
import DatePicker from "../../components/DatePicker";
import CampaignBudget from "../../components/CampaignBudget";
import LinksField from "../../features/LinksField";
import LinksFieldProps from "../data/LinksFieldProps";

const CommercialVideoBrief = ({ lg }) => {
  const [showChildren, setShowChildren] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createVideoBriefForm());
    setShowChildren(true);
    //return () => dispatch(resetForm());
  }, [dispatch]);
  return (
    showChildren && (
      <div>
        {contactsProps.map((item) => (
          <ContactField {...item} lg={lg} />
        ))}
        <LinksField {...LinksFieldProps[0]} lg={lg} />
        <TextareaField {...Summary} lg={lg} />
        <TextareaField {...Scenario_ideas} lg={lg} />
        <RadioGroup
          name={{
            en: "Video format",
            am: "Տեսահոլովակի ֆորմատ",
            ru: "Формат видеоролика",
          }}
          title={{
            en: "Video format",
            am: "Տեսահոլովակի ֆորմատ",
            ru: "Формат видеоролика",
          }}
          data={videoFormats}
          require={true}
          lg={lg}
        />
        <RadioGroup
          name={{
            en: "Video type",
            am: "Տեսահոլովակի տեսակ",
            ru: "Тип видеоролика",
          }}
          title={{
            en: "Video type",
            am: "Տեսահոլովակի տեսակ",
            ru: "Тип видеоролика",
          }}
          data={videoTypes}
          require={true}
          lg={lg}
        />
        <TextareaField {...Adaptations_of_the_video} lg={lg} />
        <CampaignType
          name={{
            en: "Mood",
            am: "Տեսահոլովակի տրամադրություն (Mood)",
            ru: "Настроение видеоролика (Mood)",
          }}
          title={{
            en: "Mood",
            am: "Տեսահոլովակի տրամադրություն (Mood)",
            ru: "Настроение видеоролика (Mood)",
          }}
          data={videoMood}
          require={true}
          lg={lg}
        />
        <TargetGroup
          title={{
            am: "Թիրախային խումբ",
            en: "Target group",
            ru: "Целевая группа",
          }}
          lg={lg}
          name={{
            am: "Թիրախային խումբ",
            en: "Target group",
            ru: "Целевая группа",
          }}
        />
        <HyperactiveBuyers
          title={{
            am: ["Hyperactive buyer persona", "Տարիք՝", "տ․"],
            en: ["Hyperactive buyer persona", "Age", "age"],
            ru: ["Hyperactive buyer persona", "Возраст", "лет"],
          }}
          lg={lg}
          name={{
            am: "Hyperactive buyer persona",
            en: "Hyperactive buyer persona",
            ru: "Hyperactive buyer persona",
          }}
        />
        <TextareaField {...Additional_information_about_the_target} lg={lg} />
        <TextareaField {...Current_Consumer_Behavior} lg={lg} />
        <TextareaField {...Current_Consumer_Feedback} lg={lg} />
        <TextareaField {...Desired_Consumer_Behavior_Video} lg={lg} />
        <TextareaField {...Expected_Consumer_Feedback_Video} lg={lg} />
        <TextareaField {...USP_Brand_promise} lg={lg} />
        <TextareaField {...Insight} lg={lg} />
        <TextareaField {...Main_message_of_the_video} lg={lg} />
        <TextareaField {...Secondary_message_of_the_video} lg={lg} />
        <TextareaField {...RTB} lg={lg} />
        <TextareaField {...Barrier} lg={lg} />
        <TextareaField {...Essential_elements_Video} lg={lg} />
        <TextareaField {...Excluded_elements_Video} lg={lg} />
        <TextareaField {...Packshot} lg={lg} />
        <CampaignType
          name={{
            am: "Տեսահոլովակի առաջխաղացման մեդիաներ",
            en: "Media for video promotion",
            ru: "Медиа для продвижения видеоролика",
          }}
          title={{
            am: "Տեսահոլովակի առաջխաղացման մեդիաներ",
            en: "Media for video promotion",
            ru: "Медиа для продвижения видеоролика",
          }}
          lg={lg}
          require={true}
          data={VideoPromotion}
        />
        <LinksField {...LinksFieldProps[1]} lg={lg} />

        <TextareaField {...Agencys_Task} lg={lg} />
        <TextareaField {...KPIs_Video} lg={lg} />
        <DatePicker
          lg={lg}
          title={{
            am: "Տեսահոլովակի իրականացման ժամկետներ",
            en: "Video Implementation Deadlines",
            ru: "Сроки производства рекламного ролика",
          }}
          name={{
            am: "Տեսահոլովակի իրականացման ժամկետներ",
            en: "Video Implementation Deadlines",
            ru: "Сроки производства рекламного ролика",
          }}
        />
        <CampaignBudget
          title={{
            am: ["Տեսահոլովակի իրականացման բյուջե", "Ընդհանուր գումար՝"],
            en: ["Video Implementation Budget", "Amount"],
            ru: ["Бюджет производства рекламного ролика", "Общая сумма"],
          }}
          data={[
            {
              am: "USD",
              en: "USD",
              ru: "USD",
            },
            {
              am: "AMD",
              en: "AMD",
              ru: "AMD",
            },
            {
              am: "RUB",
              en: "RUB",
              ru: "RUB",
            },
          ]}
          lg={lg}
          name={{
            am: "Տեսահոլովակի իրականացման բյուջե",
            en: "Video Implementation Budget",
            ru: "Бюджет производства рекламного ролика",
          }}
        />
        <LinksField {...LinksFieldProps[2]} lg={lg} />
        <LinksField {...LinksFieldProps[3]} lg={lg} />
        <TextareaField {...Preferred_director} lg={lg} />
        <FilesBox
          name={{
            am: "Հավելյալ տեղեկատվություն",
            en: "Additional Information",
            ru: "Дополнительная информация",
          }}
          title={{
            am: "Հավելյալ տեղեկատվություն",
            en: "Additional Information",
            ru: "Дополнительная информация",
          }}
          lg={lg}
        />
      </div>
    )
  );
};

export default CommercialVideoBrief;
