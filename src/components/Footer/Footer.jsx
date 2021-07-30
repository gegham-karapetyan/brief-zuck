import React from "react";
//import RequiredInfo from "../RequiredInfo";

import "./style.scss";

const SocialBlock = () => {
  return (
    <div className="social-block">
      <a href="https://www.facebook.com/zuckagency/">facebook</a>
      <a href="https://www.instagram.com/zuckagency/">Instagram</a>
      <a href="https://www.youtube.com/channel/UC4s1AHkPidWN34CiZd9SwKA">
        youtube
      </a>
      <a href="https://www.linkedin.com/company/zuckagency">linkedin</a>
      <a href="https://www.pinterest.com/zuckagency/">pinterest</a>
    </div>
  );
};

const Footer = (props) => {
  return (
    <div>
      <SocialBlock />
      {/* <RequiredInfo /> */}
    </div>
  );
};

export default Footer;
