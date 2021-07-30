import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { VALUE } from "../createTestSlice";
import "./style.scss";

const Buttons = () => {
  const value = useSelector(VALUE);
  return (
    <>
      <button>{value}</button>
    </>
  );
};

Buttons.propTypes = {};

export default Buttons;
