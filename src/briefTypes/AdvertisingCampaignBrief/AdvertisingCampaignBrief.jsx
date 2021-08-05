import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../features/selectBriefReducer";

import ContactField from "../../features/ContactField";
import LinksField from "../../features/LinksField";
import CampaignType from "../../features/CampaignType";
import TargetGroup from "../../components/TargetGroup";
import HyperactiveBuyers from "../../components/HyperactiveBuyers";

import TextareaField from "../../features/TextareaField";
import CampaignScope from "../../features/CampaignScope";
import DatePicker from "../../components/DatePicker";
import FilesBox from "../../components/FilesBox";
import CampaignBudget from "../../components/CampaignBudget";

import campaignTypes from "../data/CampaignTypes";
import MEDIA_TYPES from "../data/MediaTypes";
import CAMPAIGN_RANGE from "../data/CampaignRange";
import contactsProps from "../data/ContactsProps";
import textareaValues from "../data/TextareaValues";
import LinksFieldProps from "../data/LinksFieldProps";

import "./style.scss";
import {
  createAdCampaignBriefForm,
  resetForm,
} from "../../features/reduxSlices/createSliceForm";
import { useState } from "react";

const AdvertisingCampaignBrief = ({ lg }) => {
  const [showChildren, setShowChildren] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectBriefAC("Advertising Campaign Brief"));
    dispatch(createAdCampaignBriefForm());
    setShowChildren(true);
    // return () => dispatch(resetForm());
  }, [dispatch]);

  return (
    <div>
      {showChildren &&
        contactsProps
          .map((item) => <ContactField {...item} lg={lg} />)
          .concat(
            textareaValues.map((item) => <TextareaField {...item} lg={lg} />)
          )
          .concat(
            LinksFieldProps.map((item) => <LinksField {...item} lg={lg} />)
          )
          .concat([
            <CampaignType
              name={{
                am: "Արշավի տեսակ",
                en: "Campaign Type",
                ru: "Тип кампании",
              }}
              key={8}
              title={{
                am: "Արշավի տեսակ",
                en: "Campaign Type",
                ru: "Тип кампании",
              }}
              lg={lg}
              require={true}
              data={campaignTypes}
            />,
            <TargetGroup
              key={9}
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
            />,
            <HyperactiveBuyers
              key={10}
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
            />,
            <CampaignScope
              key={24}
              title={{
                am: "Արշավի մասշտաբայնություն",
                en: "Campaign Scale",
                ru: "Масштабность кампании",
              }}
              name={{
                am: "Արշավի մասշտաբայնություն",
                en: "Campaign Scale",
                ru: "Масштабность кампании",
              }}
              data={{ MEDIA_TYPES, CAMPAIGN_RANGE }}
              lg={lg}
            />,
            <DatePicker
              key={29}
              lg={lg}
              title={{
                am: "Գովազդային արշավի իրականացման ժամկետներ",
                en: "Advertising campaign deadlines",
                ru: "Сроки проведения рекламной кампании",
              }}
              name={{
                am: "Գովազդային արշավի իրականացման ժամկետներ",
                en: "Advertising campaign deadlines",
                ru: "Сроки проведения рекламной кампании",
              }}
            />,
            <CampaignBudget
              key={30}
              title={{
                am: ["Գովազդային արշավի բյուջե", "Ընդհանուր գումար՝"],
                en: ["Campaign Budget", "Amount"],
                ru: ["Бюджет рекламной кампании", "Общая сумма"],
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
                ru: "Бюджет рекламной кампании",
              }}
            />,
            <FilesBox
              key={33}
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
            />,
          ])
          .sort((a, b) => a.key - b.key)}
    </div>
  );
};

export default AdvertisingCampaignBrief;
