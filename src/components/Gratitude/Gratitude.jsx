import React from "react";
// import PropTypes from "prop-types";
import "./style.scss";

const innerText = {
  am: [
    "Շնորհակալություն։",
    "Մեր արձագանքին սպասելիս հիշեք, որ իրագործումը հոյակապ է միայն այն ժամանակ, երբ այն իրագործում է հոյակապ գաղափար։",
    "Դու հենց նոր արեցիր դեպի հոյակապ գաղափար տանող առաջին քայլը։",
    "Սպասի՛ր մեր արձագանքին 1 շաբաթվա ընթացքում։",
    "Վերադառնալ",
  ],
  en: [
    "Thank you.",
    "While waiting for our feedback, remember that great execution is only great when it executes a great idea.",
    "You've just made the first step for a great\nidea by filling the form.",
    "We'll contact you in a week. Stay tuned.",
    "Go Back",
  ],
  ru: [
    "Спасибо.",
    "В ожидании нашего ответа помни, что реализация грандиозна лишь тогда, когда реализует грандиозную идею.",
    "Ты только что сделал первый шаг к грандиозной идее.",
    "Жди нашего ответа в течение недели.",
    "Назад",
  ],
};

const Gratitude = ({ lg, setGratitude }) => {
  return (
    <div className={`gratitude --${lg}`}>
      <p>{innerText[lg][0]}</p>
      <div>
        {innerText[lg][1]}
        <br />
        <br />
        {innerText[lg][2]}
        {/* You've just made the first step for a great
        <br />
        idea by filling the form. */}
        <p>{innerText[lg][3]}</p>
      </div>

      <div>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => setGratitude(false)}
        >
          {innerText[lg][4]}
        </button>
      </div>
    </div>
  );
};

// Gratitude.propTypes = {};

export default Gratitude;
