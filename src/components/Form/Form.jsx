import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import AdvertisingCampaignBrief from "../AdvertisingCampaignBrief";
import VisualKeyVisualBrief from "../VisualKeyVisualBrief";
import CommercialVideoBrief from "../CommercialVideoBrief";
import SocialMediaActivationBrief from "../SocialMediaActivationBrief";
import StrategyBrief from "../StrategyBrief";
import LogoBrief from "../LogoBrief";
import * as style from "./style.module.scss";

const Form = (props) => {
  return (
    <form className={style.form}>
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
            <AdvertisingCampaignBrief />
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
        </Switch>
      </div>
    </form>
  );
};

export default Form;
