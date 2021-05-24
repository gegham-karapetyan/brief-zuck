import React from "react";
import "./style.scss";

const UrlBlock = (props) => {
  return (
    <div className="urlsBlocks">
      {props.urls.map((url) => (
        <div className="urlBlock" key={url.id}>
          <span>{url.val}</span>
          <span>&#10005;</span>
        </div>
      ))}
    </div>
  );
};

export default UrlBlock;
