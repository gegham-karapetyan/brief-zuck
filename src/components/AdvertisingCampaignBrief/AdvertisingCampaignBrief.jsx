import React, { useEffect } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../redux/selectBriefReducer";
import InputText from "../InputText";
import InputSocial from "../InputSocial";
import CampaignCheckboxes from "../CampaignCheckboxes";
import InputRange from "../InputRange";

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
      <InputRange />
    </div>
  );
};

export default AdvertisingCampaignBrief;
