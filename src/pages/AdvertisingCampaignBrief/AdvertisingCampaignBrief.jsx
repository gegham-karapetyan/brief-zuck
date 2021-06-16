import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../features/selectBriefReducer";
import { createFields } from "../../features/createSliceForm";
import InputText from "../../components/InputText";
import InputSocial from "../../components/InputSocial";
import CheckboxesGroup from "../../components/CheckboxesGroup";
import TargetGroup from "../../components/TargetGroup";
import HyperactiveBuyers from "../../components/HyperactiveBuyers";
import Textarea from "../../components/Textarea";
import MassMedia from "../../components/MassMedia";
import DatePicker from "../../components/DatePicker";
import FilesBox from "../../components/FilesBox";
import CampaignBudget from "../../components/CampaignBudget";

import campaignTypes from "./data/CampaignTypes";
import massMedia from "./data/MassMedia";

////////////////////////
import textInputsValues from "./data/TextInputsValues";
import textareaValues from "./data/TextareaValues";
import inputSocialValues from "./data/InputSocialvalues";

import "./style.scss";

const AdvertisingCampaignBrief = ({ lg }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectBriefAC("Advertising Campaign Brief"));
    window.sendingData = {
      type: "Advertising Campaign Brief",
      "Campagin Type": {},
      "Target Group": {},
      "Hyperactive Buyers": {},
      "Campaign Range": {},
      "Campaign Implementation Timeframe": {},
      "Campaign Budget": {},
      "Additional Information": {},
      Media: {},
    };
  });

  return (
    <div>
      {textInputsValues
        .map((item) => <InputText {...item} lg={lg} />)
        .concat(textareaValues.map((item) => <Textarea {...item} lg={lg} />))
        .concat(
          inputSocialValues.map((item) => <InputSocial {...item} lg={lg} />)
        )
        .concat([
          <CheckboxesGroup
            name="Campaign Type"
            key={8}
            title={{ am: "Արշավի տեսակ * ", en: "Campaign Type *", ru: "" }}
            lg={lg}
            require={true}
            data={campaignTypes}
          />,
          <TargetGroup
            key={9}
            title={{
              am: "Թիրախային խումբ *",
              en: "Target Audience * ",
              ru: "",
            }}
            lg={lg}
            name="Target Audience"
          />,
          <HyperactiveBuyers
            key={10}
            title={{
              am: ["Hyperactive buyer persona", "Տարիք՝", "տ․"],
              en: ["Hyperactive buyer persona", "Age", "age"],
              ru: ["Hyperactive buyer persona", "Age", "age"],
            }}
            lg={lg}
            name="Hyperactive Buyers"
          />,
          <MassMedia
            key={24}
            title={{
              am: "Արշավի մասշտաբայնություն *",
              en: "Campaign Range * ",
              ru: "",
            }}
            name="Campaign Range"
            data={massMedia}
            lg={lg}
          />,
          <DatePicker
            key={28}
            lg={lg}
            title={{
              am: "Գովազդային արշավի իրականացման ժամկետներ *",
              en: "Campaign Implementation Timeframe *",
              ru: "",
            }}
            name="Campaign Implementation Timeframe"
          />,
          <CampaignBudget
            key={29}
            title={{
              am: ["Գովազդային արշավի բյուջե", "Ընդհանուր՝"],
              en: ["Campaign Budget", "Amount"],
              ru: ["Գովազդային արշավի բյուջե", "Ընդհանուր՝"],
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
            name="Campaign Budget"
          />,
          <FilesBox
            key={32}
            name="Additional Information"
            title={{
              am: "Հավելյալ տեղեկատվություն",
              en: "Additional Information",
              ru: "",
            }}
            lg={lg}
          />,
        ])
        .sort((a, b) => a.key - b.key)}
    </div>
  );
};

export default AdvertisingCampaignBrief;
