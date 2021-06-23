import React from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import { store } from "../../app/store";

import "./style.scss";

const title = {
  am: "Ուղարկել",
  en: "Submit",
  ru: "",
};

const InputSubmit = ({ lg }) => {
  const [modal, setModal] = useState(false);
  const location = useLocation();
  console.log("useParams", location);
  const onSubmit = () => {
    const formData = {
      __type__: location.pathname.slice(1).split("-").join(" "),
      lang: lg,
    };
    const data = store.getState().form;

    formData.data = data;
    const stringifiedData = JSON.stringify(formData, null, "\t");
    setModal(stringifiedData);

    fetch("https://api.zuckandberg.com/api/v1/store", {
      method: "POST",
      body: stringifiedData,
    })
      .then((res) => {
        console.log("response -> ", res);
        return res.text();
      })
      .then(console.log);
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
