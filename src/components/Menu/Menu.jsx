import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { briefType } from "../../redux/selectBriefReducer";
import "./style.scss";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const value = useSelector(briefType);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <menu>
      <div className="label">Ընտրել բրիֆը՝</div>
      <div onClick={toggleMenu} className="option">
        <div className="selected">{value}</div>
        <div className={`accordionIcon ${open ? "open" : ""}`}></div>
      </div>
      <nav>
        {open &&
          [
            <Link onClick={toggleMenu} key="1" to="/Advertising-Campaign-Brief">
              Advertising Campaign Brief
            </Link>,
            <Link onClick={toggleMenu} key="2" to="/Visual-Key-Visual-Brief">
              Visual / Key Visual Brief
            </Link>,
            <Link onClick={toggleMenu} key="3" to="/Commercial-Video-Brief">
              Commercial Video Brief
            </Link>,
            <Link
              onClick={toggleMenu}
              key="4"
              to="/Social-Media-Activation-Brief"
            >
              Social Media Activation Brief
            </Link>,
            <Link onClick={toggleMenu} key="5" to="/Strategy-Brief">
              Strategy Brief
            </Link>,
            <Link onClick={toggleMenu} key="6" to="/Logo-Brief">
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
