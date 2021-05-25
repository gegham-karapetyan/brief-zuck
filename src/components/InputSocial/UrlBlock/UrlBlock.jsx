import React from "react";
import "./style.scss";

const UrlBlock = (props) => {
  return (
    <div className="urlsBlocks">
      {props.urls.map((url) => (
        <div className="urlBlock" key={url.id}>
          <span className="urlLink">{url.val}</span>
          <span onClick={() => props.onClick(url.id)} className="closeBtn">
            &#10005;
          </span>
        </div>
      ))}
    </div>
  );
};

export default UrlBlock;
