import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { briefType } from "../../redux/selectBriefReducer";
import "./style.scss";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const value = useSelector(briefType);
  const onClick = () => {
    setOpen(!open);
  };
  return (
    <menu>
      <div onClick={onClick} className="option">
        <div className="selected">{value}</div>
        <div className={`accordionIcon ${open ? "open" : ""}`}></div>
      </div>
      <nav>
        {open &&
          [
            <Link key="1" to="/Advertising-Campaign-Brief">
              Advertising Campaign Brief
            </Link>,
            <Link key="2" to="/Visual-Key-Visual-Brief">
              Visual / Key Visual Brief
            </Link>,
            <Link key="3" to="/Commercial-Video-Brief">
              Commercial Video Brief
            </Link>,
            <Link key="4" to="/Social-Media-Activation-Brief">
              Social Media Activation Brief
            </Link>,
            <Link key="5" to="/Strategy-Brief">
              Strategy Brief
            </Link>,
            <Link key="6" to="/Logo-Brief">
              Logo Brief
            </Link>,
          ].filter(
            (link) => link.props.to !== "/" + value.replace(/([\s/])+/g, "-")
          )}
      </nav>
    </menu>
  );
};

export default Menu;
