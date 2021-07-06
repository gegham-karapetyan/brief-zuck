import React from "react";
import "./style.scss";

const UrlBlock = (props) => {
  return (
    <div className="urlsBlocks">
      {props.urls.map((url, i) => (
        <div className="urlBlock" key={url.id}>
          <input type="hidden" name={`url${i}`} value={url.val} />
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
