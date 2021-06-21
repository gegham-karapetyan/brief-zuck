import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../features/selectBriefReducer";

import ContactField from "../../features/ContactField";
import InputSocial from "../../components/InputSocial";
import CampaignType from "../../features/CampaignType";
import TargetGroup from "../../components/TargetGroup";
import HyperactiveBuyers from "../../components/HyperactiveBuyers";
import DescriptionField from "../../features/DescriptionField";
import MassMedia from "../../features/CampaignRange";
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
  });

  return (
    <div>
      {textInputsValues
        .map((item) => <ContactField {...item} lg={lg} />)
        .concat(
          textareaValues.map((item) => <DescriptionField {...item} lg={lg} />)
        )
        .concat(
          inputSocialValues.map((item) => <InputSocial {...item} lg={lg} />)
        )
        .concat([
          <CampaignType
            name={{ am: "Արշավի տեսակ *", en: "Campaign Type *", ru: "" }}
            key={8}
            title={{ am: "Արշավի տեսակ *", en: "Campaign Type *", ru: "" }}
            lg={lg}
            require={true}
            data={campaignTypes}
          />,
          <TargetGroup
            key={9}
            title={{
              am: "Թիրախային խումբ *",
              en: "Target Audience *",
              ru: "",
            }}
            lg={lg}
            name={{
              am: "Թիրախային խումբ *",
              en: "Target Audience *",
              ru: "",
            }}
          />,
          <HyperactiveBuyers
            key={10}
            title={{
              am: ["Hyperactive buyer persona", "Տարիք՝", "տ․"],
              en: ["Hyperactive buyer persona", "Age", "age"],
              ru: ["Hyperactive buyer persona", "Age", "age"],
            }}
            lg={lg}
            name={{
              am: "Hyperactive buyer persona",
              en: "Hyperactive buyer persona",
              ru: "Hyperactive buyer persona",
            }}
          />,
          <MassMedia
            key={24}
            title={{
              am: "Արշավի մասշտաբայնություն *",
              en: "Campaign Range *",
              ru: "",
            }}
            name={{
              am: "Արշավի մասշտաբայնություն *",
              en: "Campaign Range *",
              ru: "",
            }}
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
            name={{
              am: "Գովազդային արշավի իրականացման ժամկետներ *",
              en: "Campaign Implementation Timeframe *",
              ru: "",
            }}
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
            name={{
              am: "Գովազդային արշավի բյուջե",
              en: "Campaign Budget",
              ru: "",
            }}
          />,
          <FilesBox
            key={32}
            name={{
              am: "Հավելյալ տեղեկատվություն",
              en: "Additional Information",
              ru: "",
            }}
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
