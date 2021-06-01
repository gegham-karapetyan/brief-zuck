import React, { useEffect } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../redux/selectBriefReducer";
import InputText from "../InputText";
import InputSocial from "../InputSocial";
import CheckboxesGroup from "../CheckboxesGroup";
import TargetGroup from "../TargetGroup";
import HyperactiveBuyers from "../HyperactiveBuyers";
import Textarea from "../Textarea";
import CampaignScalability from "../CampaignScalability";

const AdvertisingCampaignBrief = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectBriefAC("Advertising Campaign Brief"));
  });

  return (
    <div>
      <InputText
        name={{ name: "Բրենդ ", required: true, hint: true, lg: "am" }}
      />
      <InputText
        name={{
          name: "Անուն Ազգանուն ",
          required: true,
          hint: true,
          lg: "am",
        }}
      />
      <InputText
        name={{ name: "Էլ. հասցե ", required: true, hint: true, lg: "am" }}
      />
      <InputText
        name={{ name: "Հաստիք ", required: true, hint: true, lg: "am" }}
      />
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
        name={"Արշավի տեսակ "}
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
      {/* will be added calendare */}
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
