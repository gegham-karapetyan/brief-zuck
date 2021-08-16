import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import AdvertisingCampaignBrief from "../../briefTypes/AdvertisingCampaignBrief";
// import VisualKeyVisualBrief from "../../briefTypes/VisualKeyVisualBrief";
import CommercialVideoBrief from "../../briefTypes/CommercialVideoBrief";
// import SocialMediaActivationBrief from "../../briefTypes/SocialMediaActivationBrief";
// import StrategyBrief from "../../briefTypes/StrategyBrief";
// import LogoBrief from "../../briefTypes/LogoBrief";
// import Paragraph from "../Paragraph";
import InputDownload from "../InputDownload";
import InputSubmit from "../InputSubmit";
// import disclaimer from "../../data/Disclaimer";
import Gratitude from "../Gratitude";

import "./style.scss";

import { useRef } from "react";

const Form = ({ lg }) => {
  const nodeRef = useRef(null);
  //const isOpenGratitude = useSelector(IS_SENDING_SUCCESS);
  //const isOpenGratitude = false;
  const [isOpenGratitude, setGratitude] = useState(false);

  return (
    <div ref={nodeRef} className="form">
      <div className={"wrapper"}>
        {isOpenGratitude ? (
          <Gratitude setGratitude={setGratitude} />
        ) : (
          <>
            <h1>
              “We just want something creative” <br />
              is the worst brief ever.
            </h1>
            <Switch>
              <Route exact path="/">
                <Redirect to="/Advertising-Campaign-Brief" />
              </Route>

              <Route exact path="/Advertising-Campaign-Brief">
                <AdvertisingCampaignBrief lg={lg} />
              </Route>
              {/* <Route path="/Visual-Key-Visual-Brief">
                <VisualKeyVisualBrief />
              </Route> */}
              <Route exact path="/Commercial-Video-Brief">
                <CommercialVideoBrief lg={lg} />
              </Route>
              {/* <Route path="/Social-Media-Activation-Brief">
                <SocialMediaActivationBrief />
              </Route> */}
              {/* <Route path="/Strategy-Brief">
                <StrategyBrief />
              </Route> */}
              {/* <Route path="/Logo-Brief">
                <LogoBrief />
              </Route> */}
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
            {/* <Paragraph data={disclaimer} lg={lg} /> */}
            <div
              style={{
                marginTop: "60px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <InputDownload lg={lg} style={{ visibility: "hidden" }} />
              <InputSubmit
                sayGratitude={setGratitude}
                scrolledContainer={nodeRef}
                lg={lg}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Form;
