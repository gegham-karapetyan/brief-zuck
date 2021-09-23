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
import loader from "../../loader.svg";

import "./style.scss";

const title = {
  am: "Ուղարկել Zuck-ին",
  en: "Send to Zuck",
  ru: "Отправить Zuck",
};

const waitText = {
  am: "Խնդրում ենք սպասել",
  ru: "Подождите, пожалуйста",
  en: "Wait, please",
};

const InputSubmit = ({ lg, sayGratitude }) => {
  const [wait, setWait] = useState(false);
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
    setWait(true);

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
        setWait(false);
        if (res.result === true) {
          sayGratitude(true);
        } else {
          alert("something went wrong,\nplease try again later");
        }
      })
      .catch((e) => {
        setWait(false);
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

  return wait ? (
    <div style={{ fontWeight: "bold" }}>
      {waitText[lg]}
      <img
        src={loader}
        alt="loader"
        width={24}
        height={30}
        style={{ verticalAlign: "middle", marginLeft: "10px" }}
      />
    </div>
  ) : (
    <button onClick={onSubmit} className={`link-btn ${lg}`}>
      {title[lg]}
    </button>
  );
};

export default InputSubmit;
