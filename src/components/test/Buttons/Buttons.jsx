import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Buttons = ({ values }) => {
  return (
    <>
      {values.map((value) => (
        <button>{value}</button>
      ))}
    </>
  );
};

Buttons.propTypes = {};

export default Buttons;
