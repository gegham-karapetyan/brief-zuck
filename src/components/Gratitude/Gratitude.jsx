import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Gratitude = ({ setGratitude }) => {
  return (
    <div className="gratitude">
      <div>Great execution is only great, when it executes a great idea.</div>
      <div>
        <p>
          Շնորհակալություն:
          <br /> Դե մեկ շաբաթվա ընթացքում կկապվենք մեր առաջին ճեպազրույցի համար:
        </p>
        <p>Այդ ընթացքում պատրաստվիր ZUCK-ի հետ էպիկ ճանապարհորդության:</p>
      </div>
      <div>
        <button onClick={() => setGratitude(false)}>Վերադառնալ</button>
      </div>
    </div>
  );
};

Gratitude.propTypes = {};

export default Gratitude;
