import React from "react";
import "./SeasonDisplay.css";

const getSeson = (en, ay) => {
  if (ay > 2 && ay < 8) {
    return en > 0 ? "summer" : "winter";
  } else {
    return en > 0 ? "winter" : "summer";
  }
};

const seasonConfig = {
  summer: {
    text: "Yaz dostum!",
    Background:
      "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
  },
  winter: {
    text: "..az ilerde, bahar",
    Background:
      "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
  },
};

const SeasonDisplay = (props) => {
  // console.log(props.enlem);
  const mevsim = getSeson(props.enlem, new Date().getMonth());
  const { text, Background } = seasonConfig[mevsim];
  return (
    <div
      className={`season-display ${mevsim}`}
      style={{ background: `url(${Background})` }}
    >
      <h3>{text}</h3>
    </div>
  );
};

export default SeasonDisplay;
