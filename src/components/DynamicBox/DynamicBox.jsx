import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const DynamicBox = ({ items, onClick }) => {
  return (
    <div>
      {items.map((item) => (
        <div className="item" key={item.id}>
          <span className="item__name">{item.name}</span>
          <span onClick={() => onClick(item.id)} className="closeBtn">
            &#10005;
          </span>
        </div>
      ))}
    </div>
  );
};

DynamicBox.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DynamicBox;
