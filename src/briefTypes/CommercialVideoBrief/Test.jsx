import { useState } from "react";

const Test = ({ name, focused, setFocused }) => {
  return (
    <div style={{ position: "relative", margin: "20px 15px" }}>
      <a
        href={`#${name}`}
        style={{
          position: "absolute",
          display: "block",
          top: 0,
          right: 0,

          border: "1px solid red",
        }}
      >
        name
      </a>
      <label style={{ display: "block", padding: "20px 15px" }}>
        <span
          style={{
            position: "absolute",
            left: 0,
            top: focused ? "-20px" : "20px",
          }}
        >
          {" "}
          name
        </span>
        <input
          id={name}
          style={{ display: "block" }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          type="text"
          name={name}
        />
      </label>
    </div>
  );
};

export default Test;
