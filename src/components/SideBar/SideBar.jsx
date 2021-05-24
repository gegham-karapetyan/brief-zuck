import React from "react";
import Hero from "../Hero";
import Menu from "../Menu";
import Footer from "../Footer";
import * as style from "./style.module.scss";

const SideBar = (props) => {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebarInner}>
        <Hero />

        <Menu />

        <Footer />
      </div>
    </div>
  );
};

export default SideBar;
