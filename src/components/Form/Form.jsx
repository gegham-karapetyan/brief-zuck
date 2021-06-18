import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import AdvertisingCampaignBrief from "../../pages/AdvertisingCampaignBrief";
import VisualKeyVisualBrief from "../../pages/VisualKeyVisualBrief";
import CommercialVideoBrief from "../../pages/CommercialVideoBrief";
import SocialMediaActivationBrief from "../../pages/SocialMediaActivationBrief";
import StrategyBrief from "../../pages/StrategyBrief";
import LogoBrief from "../../pages/LogoBrief";
import Paragraph from "../Paragraph";
import InputDownload from "../InputDownload";
import InputSubmit from "../InputSubmit";
import disclaimer from "../../data/Disclaimer";

import * as style from "./style.module.scss";

const Form = ({ lg }) => {
  return (
    <div className={style.form}>
      <div className={style.wrapper}>
        <h1>
          “We just want something creative” <br />
          is the worst brief ever.
        </h1>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Advertising-Campaign-Brief" />
          </Route>

          <Route path="/Advertising-Campaign-Brief">
            <AdvertisingCampaignBrief lg={lg} />
          </Route>
          <Route path="/Visual-Key-Visual-Brief">
            <VisualKeyVisualBrief />
          </Route>
          <Route path="/Commercial-Video-Brief">
            <CommercialVideoBrief />
          </Route>
          <Route path="/Social-Media-Activation-Brief">
            <SocialMediaActivationBrief />
          </Route>
          <Route path="/Strategy-Brief">
            <StrategyBrief />
          </Route>
          <Route path="/Logo-Brief">
            <LogoBrief />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
        <Paragraph data={disclaimer} lg={lg} />
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <InputDownload lg={lg} />
          <InputSubmit lg={lg} />
        </div>
      </div>
    </div>
  );
};

export default Form;
