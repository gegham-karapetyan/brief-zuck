import React from "react";
import * as style from "./style.module.scss";
import logo from "../../logo.svg";

const SideBar = (props) => {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebarInner}>
        <a href="https://zuckagency.com">
          <img src={logo} alt="logo" width="auto" />
        </a>
        <p>
          “We just want something creative” <br />
          is the worst brief ever.
        </p>
      </div>
    </div>
  );
};

export default SideBar;
