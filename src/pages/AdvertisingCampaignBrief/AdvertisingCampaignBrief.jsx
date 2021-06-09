import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../features/selectBriefReducer";
import InputText from "../../components/InputText";
import InputSocial from "../../components/InputSocial";
import CheckboxesGroup from "../../components/CheckboxesGroup";
import TargetGroup from "../../components/TargetGroup";
import HyperactiveBuyers from "../../components/HyperactiveBuyers";
import Textarea from "../../components/Textarea";
import CampaignScalability from "../../components/CampaignScalability";
import DatePicker from "../../components/DatePicker";

import CampaignBudget from "../../components/CampaignBudget";
import "./style.scss";

const AdvertisingCampaignBrief = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectBriefAC("Advertising Campaign Brief"));
  });

  return (
    <div>
      <InputText name="Բրենդ " required={true} hint={true} lg="am" />
      <InputText name="Անուն Ազգանուն " required={true} hint={true} lg="am" />
      <InputText name="Էլ. հասցե " required={true} hint={true} lg="am" />
      <InputText name="Հաստիք " required={true} hint={true} lg="am" />
      <InputSocial
        name={{
          name: "Կայք, Ֆեյսբուք, Ինստագրամ, և այլն  *",
          required: true,
          hint: true,
          lg: "am",
        }}
      />
      <Textarea
        name={{
          name: "Ամփոփ նկարագիր ",
          required: false,
          hint: true,
          lg: "am",
        }}
      />
      <CheckboxesGroup
        name={"Արշավի տեսակ * "}
        data={[
          "Brand awareness campaign",
          "Brand launch campaign",
          "Product/service launch campaign",
          "Rebranding campaign",
          "Seasonal push campaign",
          "Corporate social responsibility (CSR) campaign",
          "Contest marketing campaign",
          "Ecommerce campaign",
          "Lead generation campaign",
          "Teaser campaign",

          "Other",
        ]}
      />
      <TargetGroup />
      <HyperactiveBuyers />
      <Textarea
        name={{
          name: "Հավելյալ տեղեկատվություն թիրախի մասին ",
          required: false,
          hint: true,
          lg: "am",
        }}
      />
      <Textarea
        name={{
          name: "Սպառողների ներկայիս վարքագիծ ",
          required: false,
          hint: false,
          lg: "am",
        }}
      />
      <Textarea
        name={{
          name: "Սպառողների ներկայիս կարծիք ",
          required: false,
          hint: false,
          lg: "am",
        }}
      />
      <Textarea
        name={{
          name: "Սպառողների ցանկալի վարքագիծ (արշավի իրականացումից հետո) ",
          required: false,
          hint: false,
          lg: "am",
        }}
      />
      <Textarea
        name={{
          name: "USP (unique selling proposition) /Brand promise  ",
          required: true,
          hint: true,
          lg: "am",
        }}
      />
      <Textarea
        name={{
          name: "Insight/Consumer Insight  ",
          required: true,
          hint: true,
          lg: "am",
        }}
      />
      <Textarea
        name={{
          name: "Գովազդային արշավի հիմնական ուղերձ (մեսիջ) ",
          required: true,
          hint: false,
          lg: "am",
        }}
      />
      <Textarea
        name={{
          name: "Գովազդային արշավի երկրորդային ուղերձ (մեսիջ)  ",
          required: true,
          hint: false,
          lg: "am",
        }}
      />
      <Textarea
        name={{
          name: "RTB (reason to believe)   ",

          required: false,
          hint: true,
          lg: "am",
        }}
      />
      <Textarea
        name={{
          name: "Barrier  ",
          required: false,
          hint: true,
          lg: "am",
        }}
      />
      <Textarea
        name={{
          name: "Գովազդային արշավի/կոմունիկացիայի տարրեր, որոնք պարտադիր են   ",
          required: true,
          hint: true,
          lg: "am",
        }}
      />
      <Textarea
        name={{
          name: "Գովազդային արշավի/կոմունիկացիայի տարրեր, որոնք բացառվում են  ",
          required: true,
          hint: true,
          lg: "am",
        }}
      />
      <CampaignScalability />
      <InputSocial
        name={{
          name: "Պատկերացումներ մրցակիցների մասին  (հղումներ)",
          required: false,
          hint: false,
          lg: "am",
        }}
      />
      <Textarea
        name={{
          name: "Գործակալության առաջադրանքը",
          required: false,
          hint: false,
          lg: "am",
        }}
      />
      <Textarea
        name={{
          name: "KPIs (Key Performance Indicators)",
          required: false,
          hint: true,
          lg: "am",
        }}
      />
      <DatePicker name="Գովազդային արշավի իրականացման ժամկետներ *" />
      <CampaignBudget />
      <InputSocial
        name={{
          name: "Նմանատիպ աշխատանք, որը դուր է գալիս (հղումներ) ",
          required: false,
          hint: true,
          lg: "am",
        }}
      />
      <InputSocial
        name={{
          name: "Նմանատիպ աշխատանք, որը դուր չի գալիս  (հղումներ) ",
          required: false,
          hint: true,
          lg: "am",
        }}
      />
    </div>
  );
};

export default AdvertisingCampaignBrief;
