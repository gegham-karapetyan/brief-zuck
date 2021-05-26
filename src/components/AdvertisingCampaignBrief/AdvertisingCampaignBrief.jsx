import React, { useEffect } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../redux/selectBriefReducer";
import InputText from "../InputText";
import InputSocial from "../InputSocial";
import CampaignCheckboxes from "../CampaignCheckboxes";
import TargetGroup from "../TargetGroup";
import HyperactiveBuyers from "../HyperactiveBuyers";

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
          name: "Կայք, Ֆեյսբուք, Ինստագրամ, և այլն  ",
          required: true,
          hint: true,
          lg: "am",
        }}
      />
      <InputText
        name={{
          name: "Ամփոփ նկարագիր ",
          required: false,
          hint: true,
          lg: "am",
        }}
      />
      <CampaignCheckboxes name={"Արշավի տեսակ "} />
      <TargetGroup />
      <HyperactiveBuyers />
      <InputText
        name={{
          name: "Հավելյալ տեղեկատվություն թիրախի մասին ",
          required: false,
          hint: true,
          lg: "am",
        }}
      />
      <InputText
        name={{
          name: "Սպառողների ներկայիս վարքագիծ ",
          required: false,
          hint: false,
          lg: "am",
        }}
      />
      <InputText
        name={{
          name: "Սպառողների ներկայիս կարծիք ",
          required: false,
          hint: false,
          lg: "am",
        }}
      />
      <InputText
        name={{
          name: "Սպառողների ցանկալի վարքագիծ (արշավի իրականացումից հետո) ",
          required: false,
          hint: false,
          lg: "am",
        }}
      />
      <InputText
        name={{
          name: "USP (unique selling proposition) /Brand promise  ",
          required: true,
          hint: true,
          lg: "am",
        }}
      />
      <InputText
        name={{
          name: "Insight/Consumer Insight  ",
          required: true,
          hint: true,
          lg: "am",
        }}
      />
      <InputText
        name={{
          name: "Գովազդային արշավի հիմնական ուղերձ (մեսիջ) ",
          required: true,
          hint: false,
          lg: "am",
        }}
      />
      <InputText
        name={{
          name: "Գովազդային արշավի երկրորդային ուղերձ (մեսիջ)  ",
          required: true,
          hint: false,
          lg: "am",
        }}
      />
      <InputText
        name={{
          name: "RTB (reason to believe)   ",

          required: false,
          hint: true,
          lg: "am",
        }}
      />
      <InputText
        name={{
          name: "Barrier  ",
          required: false,
          hint: true,
          lg: "am",
        }}
      />
      <InputText
        name={{
          name: "Գովազդային արշավի/կոմունիկացիայի տարրեր, որոնք պարտադիր են   ",
          required: true,
          hint: true,
          lg: "am",
        }}
      />
      <InputText
        name={{
          name: "Գովազդային արշավի/կոմունիկացիայի տարրեր, որոնք բացառվում են  ",
          required: true,
          hint: true,
          lg: "am",
        }}
      />
    </div>
  );
};

export default AdvertisingCampaignBrief;
