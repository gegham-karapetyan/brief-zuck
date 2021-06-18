import { whileStatement } from "@babel/types";
import React from "react";
import { useState } from "react";

import { store } from "../../app/store";

import "./style.scss";

const title = {
  am: "Ուղարկել",
  en: "",
  ru: "",
};

const InputSubmit = ({ lg }) => {
  const [modal, setModal] = useState(false);

  const onSubmit = () => {
    const form = store.getState().form;
    setModal(JSON.stringify(form, null, "\t"));
  };

  return (
    <>
      <button onClick={onSubmit} className="link-btn">
        {title[lg]}
      </button>
      {modal && (
        <pre
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "98%",
            overflow: "auto",
            background: "white",
            zIndex: 100000,
          }}
        >
          {modal}
        </pre>
      )}
    </>
  );
};

export default InputSubmit;
