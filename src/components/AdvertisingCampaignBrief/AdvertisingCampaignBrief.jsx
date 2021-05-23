import React, { useEffect } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { selectBriefAC } from "../../redux/selectBriefReducer";

const AdvertisingCampaignBrief = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectBriefAC("Advertising Campaign Brief"));
  });

  return <div>AdvertisingCampaignBrief works!</div>;
};

export default AdvertisingCampaignBrief;
