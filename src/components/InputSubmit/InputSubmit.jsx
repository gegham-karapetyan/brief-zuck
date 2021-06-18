import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { store } from "../../app/store";

import "./style.scss";

const title = {
  am: "Ուղարկել",
  en: "Submit",
  ru: "",
};

const InputSubmit = ({ lg }) => {
  const [modal, setModal] = useState(false);
  const path = useParams();
  console.log("useParams", path);
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
          <button
            onClick={() => setModal(false)}
            style={{
              position: "absolute",
              top: "40px",
              right: "40px",
              padding: "15px",
            }}
          >
            X
          </button>
          {modal}
        </pre>
      )}
    </>
  );
};

export default InputSubmit;
