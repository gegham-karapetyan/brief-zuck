import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { store } from "../../app/store";
import {
  // First_Invalid_Field,
  scrollToInvalidFields,
} from "../../features/reduxSlices/createSliceForm";
import loader from "../../spinner.svg";

import "./style.scss";

const title = {
  am: "Ուղարկել Zuck-ին",
  en: "Send to Zuck",
  ru: "Отправить Zuck",
};

const InputSubmit = ({ lg, scrolledContainer, sayGratitude }) => {
  const [modal, setModal] = useState(false);
  //const [hash, setHash] = useState("");
  //const dispatch = useDispatch();

  //const first_Invalid_Field = useSelector(First_Invalid_Field);

  const location = useLocation();

  const onSubmit = () => {
    //

    const formData = {
      __type__: location.pathname.slice(1).split("-").join(" "),
      lang: lg,
    };
    const data = store.getState().form;

    const invalidKeys = Object.values(data).reduce((acc, val) => {
      if (!val.isValid) {
        acc.push(val);
      }
      return acc;
    }, []);
    if (invalidKeys.length) {
      store.dispatch(scrollToInvalidFields(invalidKeys[0].id));

      return;
    }

    formData.data = data;
    const stringifiedData = JSON.stringify(formData);

    fetch("https://api.zuckandberg.com/api/v1/store", {
      method: "POST",
      body: stringifiedData,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.result === true) {
          sayGratitude(true);
        } else {
          alert("something went wrong,\nplease try again later");
        }
      })
      .catch((e) => {
        alert("something went wrong,\nplease try again later");
      });
    // sayGratitude(true);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (hash) document.getElementById(hash).scrollIntoView();
  //   }, 100);
  //   dispatch(hasSubmitted());
  //   if (hash) window.location.href = hash;
  // }, [hash]);

  return (
    <>
      <button onClick={onSubmit} className={`link-btn ${lg}`}>
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
