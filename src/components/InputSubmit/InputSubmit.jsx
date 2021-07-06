import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { store } from "../../app/store";
import { hasSubmitted } from "../../features/createSliceForm";
import loader from "../../spinner.svg";

import "./style.scss";

const title = {
  am: "Ուղարկել",
  en: "Submit",
  ru: "",
};

const InputSubmit = ({ lg }) => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const location = useLocation();

  const onSubmit = () => {
    dispatch(hasSubmitted());
    const formData = {
      __type__: location.pathname.slice(1).split("-").join(" "),
      lang: lg,
    };
    const data = store.getState().form;

    const invalidKeys = Object.values(data).reduce((acc, val) => {
      if (!val.isValid) {
        acc.push(val.name);
      }
      return acc;
    }, []);
    if (invalidKeys.length) {
      console.log(invalidKeys);
      return;
    }

    formData.data = data;
    const stringifiedData = JSON.stringify(formData, null, "\t");
    setModal(true);

    fetch("https://api.zuckandberg.com/api/v1/store", {
      method: "POST",
      body: stringifiedData,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.result);
        if (res.result) {
          setModal(false);
        }
      });
  };

  return (
    <>
      <button onClick={onSubmit} className="link-btn">
        {title[lg]}
      </button>
      {modal && (
        <div
          style={{
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "auto",
            background: "rgba(0,0,0,0.5)",
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
          <img src={loader} alt="loader" />
        </div>
      )}
    </>
  );
};

export default InputSubmit;
